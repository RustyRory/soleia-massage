import { cacheLife } from "next/cache";

export type Photo = {
  id: string;
  name: string;
  src: string;
  thumb: string;
};

export async function getGalleryPhotos(): Promise<Photo[]> {
  "use cache";
  cacheLife("minutes");

  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  const params = new URLSearchParams({
    q: `'${folderId}' in parents and mimeType contains 'image/'`,
    orderBy: "name",
    key: apiKey!,
    fields: "files(id,name)",
  });

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?${params}`
  );

  if (!res.ok) return [];

  const data = await res.json();

  return (data.files ?? []).map((f: { id: string; name: string }) => ({
    id: f.id,
    name: f.name,
    src: `https://drive.google.com/uc?export=view&id=${f.id}`,
    thumb: `https://drive.google.com/thumbnail?id=${f.id}&sz=w800`,
  }));
}
