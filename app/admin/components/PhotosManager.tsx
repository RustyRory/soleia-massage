"use client";

import Image from "next/image";
import { useActionState } from "react";
import { deletePhoto, uploadPhoto } from "../actions";

export type AdminPhoto = { id: string; name: string; thumb: string };

export default function PhotosManager({ photos }: { photos: AdminPhoto[] }) {
  const [state, formAction, pending] = useActionState(uploadPhoto, undefined);
  const [deleteState, deleteAction, deletePending] = useActionState(deletePhoto, undefined);

  return (
    <div className="flex flex-col gap-6">
      <form
        action={formAction}
        className="bg-white rounded-2xl p-6 border border-[#2D2416]/5 flex flex-col sm:flex-row sm:items-center gap-4"
      >
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          className="text-sm text-[#7A6652] file:mr-4 file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-[#C07A4A]/10 file:text-[#C07A4A] file:text-xs file:tracking-widest file:uppercase"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C07A4A] text-white text-sm rounded-full hover:bg-[#9A5C34] transition-colors duration-200 disabled:opacity-60 shrink-0"
        >
          {pending ? "Envoi..." : "Ajouter une photo"}
        </button>
        {state?.error && <p className="text-sm text-[#B5452F]">{state.error}</p>}
        {state?.success && <p className="text-sm text-[#4A7A5C]">{state.success}</p>}
      </form>

      {deleteState?.error && (
        <p className="text-sm text-[#B5452F] bg-white rounded-2xl p-4 border border-[#2D2416]/5">
          {deleteState.error}
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-xl overflow-hidden border border-[#2D2416]/10 bg-[#FAF2EE]"
          >
            <Image
              src={photo.thumb}
              alt={photo.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <form
              action={deleteAction}
              className="absolute inset-0 flex items-center justify-center bg-[#2D2416]/0 group-hover:bg-[#2D2416]/50 transition-colors duration-200"
            >
              <input type="hidden" name="fileId" value={photo.id} />
              <button
                type="submit"
                disabled={deletePending}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-4 py-2 bg-white text-[#B5452F] text-xs rounded-full disabled:opacity-60"
              >
                Supprimer
              </button>
            </form>
          </div>
        ))}
        {photos.length === 0 && (
          <p className="text-sm text-[#7A6652] col-span-full">Aucune photo pour le moment.</p>
        )}
      </div>
    </div>
  );
}
