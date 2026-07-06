import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";

const COOKIE_NAME = "admin_session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

function getSecretKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("Missing SESSION_SECRET env var");
  return new TextEncoder().encode(secret);
}

type SessionPayload = {
  email: string;
};

async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecretKey());
}

async function decrypt(token: string | undefined): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify<SessionPayload>(token, getSecretKey(), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  // Stored as base64 to avoid Next.js's `$VAR` expansion in .env files mangling the raw bcrypt hash.
  const adminPasswordHashB64 = process.env.ADMIN_PASSWORD_HASH_BASE64;
  if (!adminEmail || !adminPasswordHashB64) {
    throw new Error("Missing ADMIN_EMAIL / ADMIN_PASSWORD_HASH_BASE64 env vars");
  }

  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) return false;
  const adminPasswordHash = Buffer.from(adminPasswordHashB64, "base64").toString("utf8");
  return bcrypt.compare(password, adminPasswordHash);
}

export async function createSession(email: string): Promise<void> {
  const session = await encrypt({ email });
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + SESSION_DURATION_MS),
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export const verifySession = cache(async (): Promise<SessionPayload> => {
  const cookieStore = await cookies();
  const session = await decrypt(cookieStore.get(COOKIE_NAME)?.value);

  if (!session) {
    redirect("/admin/login");
  }

  return session;
});

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  return decrypt(cookieStore.get(COOKIE_NAME)?.value);
}
