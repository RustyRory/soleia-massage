"use client";

import { useActionState } from "react";
import { login } from "../actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF2EE] px-6">
      <form
        action={formAction}
        className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-sm border border-[#2D2416]/5 flex flex-col gap-6"
      >
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#C07A4A] mb-2">
            Espace admin
          </p>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-3xl text-[#2D2416]">
            Connexion
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs tracking-widest uppercase text-[#7A6652]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="username"
            className="border-b border-[#E8D8CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A] transition-colors text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xs tracking-widest uppercase text-[#7A6652]">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="border-b border-[#E8D8CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C07A4A] transition-colors text-sm"
          />
        </div>

        {state?.error && (
          <p className="text-sm text-[#B5452F]" role="alert">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C07A4A] text-white text-sm rounded-full hover:bg-[#9A5C34] transition-colors duration-200 shadow-md shadow-[#C07A4A]/20 disabled:opacity-60"
        >
          {pending ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
