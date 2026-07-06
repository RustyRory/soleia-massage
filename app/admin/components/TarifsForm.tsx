"use client";

import { useActionState, useState } from "react";
import { updateTarifs } from "../actions";
import { Field, TextAreaField, FormFooter } from "./FormControls";
import type { SiteContent } from "@/lib/defaultContent";

type Row = { id: string; duree: string; prix: string };

export default function TarifsForm({ initial }: { initial: SiteContent["tarifs"] }) {
  const [state, formAction, pending] = useActionState(updateTarifs, undefined);
  const [rows, setRows] = useState<Row[]>(() =>
    (initial.items.length ? initial.items : [{ duree: "", prix: "" }]).map((item, i) => ({
      id: `initial-${i}`,
      ...item,
    }))
  );

  return (
    <form
      action={formAction}
      className="bg-white rounded-2xl p-6 border border-[#2D2416]/5 flex flex-col gap-5"
    >
      <TextAreaField label="Texte d'intro" name="intro" defaultValue={initial.intro} />
      <Field label="Note tarif à domicile" name="domicileNote" defaultValue={initial.domicileNote} />

      <div className="flex flex-col gap-3">
        <span className="text-xs tracking-widest uppercase text-[#7A6652]">Grille tarifaire</span>
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-3">
            <input
              name="tarif_duree"
              defaultValue={row.duree}
              placeholder="Durée (ex: 25 min)"
              className="flex-1 border-b border-[#E8D8CC] bg-transparent py-2 text-sm text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A]"
            />
            <input
              name="tarif_prix"
              defaultValue={row.prix}
              placeholder="Prix (ex: 65€)"
              className="flex-1 border-b border-[#E8D8CC] bg-transparent py-2 text-sm text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A]"
            />
            <button
              type="button"
              onClick={() => setRows((prev) => prev.filter((r) => r.id !== row.id))}
              className="text-xs text-[#B5452F] hover:underline shrink-0"
            >
              Retirer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setRows((prev) => [...prev, { id: crypto.randomUUID(), duree: "", prix: "" }])}
          className="self-start text-xs text-[#C07A4A] hover:underline"
        >
          + Ajouter un tarif
        </button>
      </div>

      <FormFooter pending={pending} state={state} />
    </form>
  );
}
