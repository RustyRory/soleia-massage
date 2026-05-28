"use client";

import { useRef } from "react";

const INSTAGRAM = "https://www.instagram.com/soleia.massage.alexanne";
const PHONE = "tel:+33615288890";
const EMAIL = "contact@soleiamassage.fr";

export default function Contact() {
  const prenomRef = useRef<HTMLInputElement>(null);
  const nomRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const soinRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    const prenom = prenomRef.current?.value ?? "";
    const nom = nomRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const soin = soinRef.current?.value ?? "";
    const message = messageRef.current?.value ?? "";

    const subject = encodeURIComponent(
      `Demande de RDV — ${soin || "Soleia Massage"}`
    );
    const body = encodeURIComponent(
      `Bonjour Alexanne,\n\nJe souhaite prendre rendez-vous pour : ${soin}\n\nPrénom : ${prenom}\nNom : ${nom}\nEmail de réponse : ${email}${message ? `\n\nMessage :\n${message}` : ""}\n\nCordialement,\n${prenom} ${nom}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#F7F0E6]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Infos */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#C06040] shrink-0" />
            <p className="text-xs tracking-[0.2em] uppercase text-[#C06040]">Contact</p>
          </div>
          <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-6 ml-12 leading-snug">
            Prendre <br />rendez-vous
          </h2>
          <p className="text-[#7A6652] text-sm leading-relaxed mb-10 ml-12 max-w-xs">
            Pour réserver une séance ou obtenir des informations, contactez-moi directement.
          </p>

          <div className="space-y-4">
            {/* Téléphone — priorité 1 */}
            <a
              href={PHONE}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-[#C06040] hover:bg-[#A04E30] transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white/70 text-xs tracking-widest uppercase mb-0.5">Téléphone</p>
                <p className="text-white font-medium text-sm">06 15 28 88 90</p>
              </div>
              <span className="text-xs text-white/80 bg-white/20 px-2.5 py-1 rounded-full">Recommandé</span>
            </a>

            {/* Instagram — priorité 2 */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-[#2D2416] hover:bg-[#3D3020] transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-0.5">Instagram</p>
                <p className="text-white text-sm">@soleia.massage.alexanne</p>
              </div>
              <span className="text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-full">Recommandé</span>
            </a>

            {/* Horaires */}
            <div className="flex items-center gap-4 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-[#C06040]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#C06040]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#7A6652] mb-0.5">Horaires</p>
                <p className="text-[#2D2416] text-sm">Lun – Sam : 9h – 19h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire → mailto */}
        <div>
          <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-[#EDE0CC] border border-[#C4B09A]/30">
            <svg className="w-4 h-4 text-[#7A6652] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            <p className="text-xs text-[#7A6652] leading-relaxed">
              Ce formulaire ouvre votre application mail avec le message pré-rempli.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#2D2416]/5 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#7A6652]">Prénom</label>
                <input
                  ref={prenomRef}
                  type="text"
                  required
                  placeholder="Marie"
                  className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#7A6652]">Nom</label>
                <input
                  ref={nomRef}
                  type="text"
                  required
                  placeholder="Dupont"
                  className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#7A6652]">Votre email (pour qu'elle puisse vous répondre)</label>
              <input
                ref={emailRef}
                type="email"
                required
                placeholder="marie@email.fr"
                className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#7A6652]">Prestation souhaitée</label>
              <input
                ref={soinRef}
                type="text"
                placeholder="Décrivez ce que vous recherchez…"
                className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#7A6652]">Message (optionnel)</label>
              <textarea
                ref={messageRef}
                rows={3}
                placeholder="Précisions, disponibilités…"
                className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 self-start inline-flex items-center gap-2 px-8 py-3.5 bg-[#C06040] text-white text-sm rounded-full hover:bg-[#A04E30] transition-colors duration-200 shadow-md shadow-[#C06040]/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Ouvrir dans mon application mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
