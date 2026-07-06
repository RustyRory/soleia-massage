"use server";

import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { createSession, deleteSession, verifyCredentials, verifySession } from "@/lib/auth";
import { getRawSiteContent, saveSiteContent } from "@/lib/content";
import { LegacyPhotoError, deletePhoto as driveDeletePhoto, uploadPhoto as driveUploadPhoto } from "@/lib/drive";
import type { SiteContent } from "@/lib/defaultContent";

export type ActionState = { error?: string; success?: string } | undefined;

async function trySaveContent(next: SiteContent, successMessage: string): Promise<ActionState> {
  try {
    await saveSiteContent(next);
  } catch (err) {
    console.error(err);
    return { error: "Échec de l'enregistrement (vérifier la configuration Google Drive)." };
  }

  updateTag("site-content");
  return { success: successMessage };
}

export async function login(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email et mot de passe requis." };
  }

  const valid = await verifyCredentials(email, password);
  if (!valid) {
    return { error: "Identifiants incorrects." };
  }

  await createSession(email);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/admin/login");
}

export async function updateContact(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await verifySession();

  const current = await getRawSiteContent();
  const next = {
    ...current,
    contact: {
      phoneDisplay: String(formData.get("phoneDisplay") ?? ""),
      phoneHref: String(formData.get("phoneHref") ?? ""),
      email: String(formData.get("email") ?? ""),
      instagram: String(formData.get("instagram") ?? ""),
      addressName: String(formData.get("addressName") ?? ""),
      addressLine: String(formData.get("addressLine") ?? ""),
      horaires: String(formData.get("horaires") ?? ""),
    },
  };

  return trySaveContent(next, "Coordonnées mises à jour.");
}

export async function updateTarifs(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await verifySession();

  const durees = formData.getAll("tarif_duree").map(String);
  const prix = formData.getAll("tarif_prix").map(String);
  const items = durees
    .map((duree, i) => ({ duree, prix: prix[i] ?? "" }))
    .filter((item) => item.duree.trim() !== "" || item.prix.trim() !== "");

  const current = await getRawSiteContent();
  const next = {
    ...current,
    tarifs: {
      intro: String(formData.get("intro") ?? ""),
      domicileNote: String(formData.get("domicileNote") ?? ""),
      items,
    },
  };

  return trySaveContent(next, "Tarifs mis à jour.");
}

export async function updateTextes(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await verifySession();

  const aboutParagraphs = formData
    .getAll("aboutParagraph")
    .map(String)
    .filter((p) => p.trim() !== "");

  const bienfaitTitles = formData.getAll("bienfaitTitle").map(String);
  const bienfaitDescriptions = formData.getAll("bienfaitDescription").map(String);
  const bienfaits = bienfaitTitles
    .map((title, i) => ({ title, description: bienfaitDescriptions[i] ?? "" }))
    .filter((b) => b.title.trim() !== "" || b.description.trim() !== "");

  const current = await getRawSiteContent();
  const next = {
    ...current,
    hero: {
      tagline: String(formData.get("heroTagline") ?? ""),
    },
    about: {
      paragraphs: aboutParagraphs,
    },
    services: {
      intro: String(formData.get("servicesIntro") ?? ""),
      bienfaits,
    },
  };

  return trySaveContent(next, "Textes mis à jour.");
}

export async function uploadPhoto(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await verifySession();

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Sélectionne une photo à envoyer." };
  }
  if (!file.type.startsWith("image/")) {
    return { error: "Le fichier doit être une image." };
  }

  try {
    await driveUploadPhoto(file);
  } catch (err) {
    console.error(err);
    return { error: "Échec de l'envoi (vérifier la configuration Google Drive)." };
  }

  updateTag("gallery-photos");
  return { success: "Photo ajoutée." };
}

export async function deletePhoto(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await verifySession();

  const fileId = String(formData.get("fileId") ?? "");
  if (!fileId) return;

  try {
    await driveDeletePhoto(fileId);
  } catch (err) {
    if (err instanceof LegacyPhotoError) {
      return { error: err.message };
    }
    console.error(err);
    return { error: "Échec de la suppression (vérifier la configuration Google Drive)." };
  }

  updateTag("gallery-photos");
  return { success: "Photo supprimée." };
}
