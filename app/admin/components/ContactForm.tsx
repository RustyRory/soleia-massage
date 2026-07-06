"use client";

import { useActionState } from "react";
import { updateContact } from "../actions";
import { Field, FormFooter } from "./FormControls";
import type { SiteContent } from "@/lib/defaultContent";

export default function ContactForm({ initial }: { initial: SiteContent["contact"] }) {
  const [state, formAction, pending] = useActionState(updateContact, undefined);

  return (
    <form
      action={formAction}
      className="bg-white rounded-2xl p-6 border border-[#2D2416]/5 flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Téléphone (affiché)" name="phoneDisplay" defaultValue={initial.phoneDisplay} />
        <Field label="Téléphone (lien tel:, ex +33...)" name="phoneHref" defaultValue={initial.phoneHref} />
        <Field label="Email" name="email" type="email" defaultValue={initial.email} />
        <Field label="Instagram (URL)" name="instagram" defaultValue={initial.instagram} />
        <Field label="Nom du lieu" name="addressName" defaultValue={initial.addressName} />
        <Field label="Adresse" name="addressLine" defaultValue={initial.addressLine} />
        <Field label="Horaires" name="horaires" defaultValue={initial.horaires} />
      </div>
      <FormFooter pending={pending} state={state} />
    </form>
  );
}
