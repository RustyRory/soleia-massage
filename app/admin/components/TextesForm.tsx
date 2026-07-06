"use client";

import { useActionState, useState } from "react";
import { updateTextes } from "../actions";
import { TextAreaField, FormFooter } from "./FormControls";
import type { SiteContent } from "@/lib/defaultContent";

type ParagraphRow = { id: string; value: string };
type BienfaitRow = { id: string; title: string; description: string };

export default function TextesForm({
  heroTagline,
  aboutParagraphs,
  servicesIntro,
  bienfaits,
}: {
  heroTagline: string;
  aboutParagraphs: string[];
  servicesIntro: string;
  bienfaits: SiteContent["services"]["bienfaits"];
}) {
  const [state, formAction, pending] = useActionState(updateTextes, undefined);

  const [paragraphs, setParagraphs] = useState<ParagraphRow[]>(() =>
    (aboutParagraphs.length ? aboutParagraphs : [""]).map((value, i) => ({
      id: `initial-${i}`,
      value,
    }))
  );

  const [bienfaitRows, setBienfaitRows] = useState<BienfaitRow[]>(() =>
    (bienfaits.length ? bienfaits : [{ title: "", description: "" }]).map((b, i) => ({
      id: `initial-${i}`,
      ...b,
    }))
  );

  return (
    <form
      action={formAction}
      className="bg-white rounded-2xl p-6 border border-[#2D2416]/5 flex flex-col gap-8"
    >
      <TextAreaField label="Accroche (Hero)" name="heroTagline" defaultValue={heroTagline} rows={2} />

      <div className="flex flex-col gap-3">
        <span className="text-xs tracking-widest uppercase text-[#7A6652]">Paragraphes — À propos</span>
        {paragraphs.map((p) => (
          <div key={p.id} className="flex items-start gap-3">
            <textarea
              name="aboutParagraph"
              defaultValue={p.value}
              rows={2}
              className="flex-1 border border-[#E8D8CC] rounded-lg bg-transparent p-3 text-sm text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A] resize-none"
            />
            <button
              type="button"
              onClick={() => setParagraphs((prev) => prev.filter((row) => row.id !== p.id))}
              className="text-xs text-[#B5452F] hover:underline shrink-0 mt-2"
            >
              Retirer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setParagraphs((prev) => [...prev, { id: crypto.randomUUID(), value: "" }])}
          className="self-start text-xs text-[#C07A4A] hover:underline"
        >
          + Ajouter un paragraphe
        </button>
      </div>

      <TextAreaField label="Texte d'intro — Services" name="servicesIntro" defaultValue={servicesIntro} />

      <div className="flex flex-col gap-4">
        <span className="text-xs tracking-widest uppercase text-[#7A6652]">Bienfaits — Services</span>
        {bienfaitRows.map((b) => (
          <div key={b.id} className="flex flex-col gap-2 p-4 rounded-lg border border-[#E8D8CC]">
            <div className="flex items-center gap-3">
              <input
                name="bienfaitTitle"
                defaultValue={b.title}
                placeholder="Titre"
                className="flex-1 border-b border-[#E8D8CC] bg-transparent py-2 text-sm text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A]"
              />
              <button
                type="button"
                onClick={() => setBienfaitRows((prev) => prev.filter((row) => row.id !== b.id))}
                className="text-xs text-[#B5452F] hover:underline shrink-0"
              >
                Retirer
              </button>
            </div>
            <textarea
              name="bienfaitDescription"
              defaultValue={b.description}
              placeholder="Description"
              rows={2}
              className="border border-[#E8D8CC] rounded-lg bg-transparent p-3 text-sm text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A] resize-none"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setBienfaitRows((prev) => [...prev, { id: crypto.randomUUID(), title: "", description: "" }])
          }
          className="self-start text-xs text-[#C07A4A] hover:underline"
        >
          + Ajouter un bienfait
        </button>
      </div>

      <FormFooter pending={pending} state={state} />
    </form>
  );
}
