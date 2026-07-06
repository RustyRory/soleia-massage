import "server-only";
import { JWT, OAuth2Client } from "google-auth-library";

export const CONTENT_FILE_NAME = "content.json";

export type DriveFile = {
  id: string;
  name: string;
};

function folderId(): string {
  const id = process.env.GOOGLE_DRIVE_FOLDER_ID;
  if (!id) throw new Error("Missing GOOGLE_DRIVE_FOLDER_ID env var");
  return id;
}

// Service account: read access + delete (shared on the folder as Editor).
// Google Drive refuses to let service accounts *create* files in a personal
// (non-Shared-Drive) folder — "Service Accounts do not have storage quota" —
// so creates/updates go through the OAuth client below instead.
let serviceAccountClient: JWT | null = null;

function getServiceAccountClient(): JWT {
  if (serviceAccountClient) return serviceAccountClient;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY env vars"
    );
  }

  serviceAccountClient = new JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  return serviceAccountClient;
}

// OAuth (drive.file scope, acting as the real Google account): used to create
// new files (photos, content.json) and update files it created — these count
// against the real account's own storage quota, unlike the service account.
let oauthClient: OAuth2Client | null = null;

function getOAuthClient(): OAuth2Client {
  if (oauthClient) return oauthClient;

  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET / GOOGLE_OAUTH_REFRESH_TOKEN env vars"
    );
  }

  oauthClient = new OAuth2Client({ clientId, clientSecret });
  oauthClient.setCredentials({ refresh_token: refreshToken });
  return oauthClient;
}

type AuthMode = "service" | "oauth";

async function getAccessToken(mode: AuthMode): Promise<string> {
  const client = mode === "oauth" ? getOAuthClient() : getServiceAccountClient();
  const { token } = await client.getAccessToken();
  if (!token) throw new Error("Failed to obtain Google Drive access token");
  return token;
}

async function driveFetch(path: string, init: RequestInit = {}, mode: AuthMode = "service"): Promise<Response> {
  const token = await getAccessToken(mode);
  return fetch(`https://www.googleapis.com${path}`, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function findFileByName(name: string): Promise<DriveFile | null> {
  const params = new URLSearchParams({
    q: `name = '${name}' and '${folderId()}' in parents and trashed = false`,
    fields: "files(id,name)",
  });
  const res = await driveFetch(`/drive/v3/files?${params}`);
  if (!res.ok) throw new Error(`Drive list failed: ${res.status}`);
  const data = await res.json();
  return data.files?.[0] ?? null;
}

export async function downloadFile(fileId: string): Promise<string> {
  const res = await driveFetch(`/drive/v3/files/${fileId}?alt=media`);
  if (!res.ok) throw new Error(`Drive download failed: ${res.status}`);
  return res.text();
}

export async function uploadOrUpdateJson(name: string, data: unknown): Promise<void> {
  const body = JSON.stringify(data, null, 2);
  const existing = await findFileByName(name);

  if (existing) {
    const res = await driveFetch(
      `/upload/drive/v3/files/${existing.id}?uploadType=media`,
      { method: "PATCH", headers: { "Content-Type": "application/json" }, body },
      "oauth"
    );
    if (!res.ok) throw new Error(`Drive update failed: ${res.status}`);
    return;
  }

  const boundary = `content_${Math.random().toString(16).slice(2)}`;
  const metadata = { name, parents: [folderId()], mimeType: "application/json" };
  const multipartBody =
    `--${boundary}\r\n` +
    `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
    `${JSON.stringify(metadata)}\r\n` +
    `--${boundary}\r\n` +
    `Content-Type: application/json\r\n\r\n` +
    `${body}\r\n` +
    `--${boundary}--`;

  const res = await driveFetch(
    `/upload/drive/v3/files?uploadType=multipart`,
    { method: "POST", headers: { "Content-Type": `multipart/related; boundary=${boundary}` }, body: multipartBody },
    "oauth"
  );
  if (!res.ok) throw new Error(`Drive create failed: ${res.status}`);
}

export async function listPhotos(): Promise<DriveFile[]> {
  const params = new URLSearchParams({
    q: `'${folderId()}' in parents and mimeType contains 'image/' and trashed = false`,
    orderBy: "name",
    fields: "files(id,name)",
  });
  const res = await driveFetch(`/drive/v3/files?${params}`);
  if (!res.ok) throw new Error(`Drive list failed: ${res.status}`);
  const data = await res.json();
  return data.files ?? [];
}

export async function uploadPhoto(file: File): Promise<void> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const boundary = `photo_${Math.random().toString(16).slice(2)}`;
  const metadata = { name: file.name, parents: [folderId()] };

  const preamble = Buffer.from(
    `--${boundary}\r\n` +
      `Content-Type: application/json; charset=UTF-8\r\n\r\n` +
      `${JSON.stringify(metadata)}\r\n` +
      `--${boundary}\r\n` +
      `Content-Type: ${file.type || "application/octet-stream"}\r\n\r\n`
  );
  const epilogue = Buffer.from(`\r\n--${boundary}--`);
  const body = Buffer.concat([preamble, buffer, epilogue]);

  const res = await driveFetch(
    `/upload/drive/v3/files?uploadType=multipart`,
    { method: "POST", headers: { "Content-Type": `multipart/related; boundary=${boundary}` }, body },
    "oauth"
  );
  if (!res.ok) throw new Error(`Drive photo upload failed: ${res.status}`);
}

export class LegacyPhotoError extends Error {}

export async function deletePhoto(fileId: string): Promise<void> {
  // Only the file's owner can delete it on a personal (non-Shared-Drive) Drive.
  // The service account is merely a "writer" on shared files (canEdit, not
  // canDelete), so deletion has to go through the OAuth user — which only
  // works for photos this app itself uploaded (drive.file scope). Photos added
  // directly in Drive before the dashboard existed are invisible to that token
  // (404), which is indistinguishable from "already deleted" — so on a 404 we
  // check with the service account (which can see every photo) to tell the two
  // cases apart before deciding whether this was really a no-op.
  const res = await driveFetch(`/drive/v3/files/${fileId}`, { method: "DELETE" }, "oauth");
  if (res.ok) return;
  if (res.status !== 404) throw new Error(`Drive delete failed: ${res.status}`);

  const stillExists = await driveFetch(`/drive/v3/files/${fileId}?fields=id`);
  if (stillExists.ok) {
    throw new LegacyPhotoError(
      "Cette photo a été ajoutée avant l'existence du dashboard : supprime-la directement depuis Google Drive."
    );
  }
}
