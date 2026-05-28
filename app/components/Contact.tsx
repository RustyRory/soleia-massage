export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#F7F0E6]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Infos */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#C06040] shrink-0" />
            <p className="text-xs tracking-[0.2em] uppercase text-[#C06040]">
              Contact
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-6 ml-12 leading-snug">
            Prendre <br />rendez-vous
          </h2>
          <p className="text-[#7A6652] text-sm leading-relaxed mb-10 ml-12 max-w-xs">
            Pour réserver une séance ou obtenir des informations, contactez-moi
            directement.
          </p>

          <div className="space-y-6">
            {[
              { label: "Téléphone", value: "+33 6 00 00 00 00", href: "tel:+33600000000" },
              { label: "Email", value: "contact@alexannebrichon.fr", href: "mailto:contact@alexannebrichon.fr" },
              { label: "Horaires", value: "Lun – Sam : 9h – 19h", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C06040]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C06040]" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#7A6652] mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-[#2D2416] hover:text-[#C06040] transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#2D2416] text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <form className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#2D2416]/5 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#7A6652]">
                Prénom
              </label>
              <input
                type="text"
                placeholder="Marie"
                className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#7A6652]">
                Nom
              </label>
              <input
                type="text"
                placeholder="Dupont"
                className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#7A6652]">
              Email
            </label>
            <input
              type="email"
              placeholder="marie@email.fr"
              className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#7A6652]">
              Soin souhaité
            </label>
            <select className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] outline-none focus:border-[#C06040] transition-colors text-sm appearance-none cursor-pointer">
              <option value="">Choisir un soin…</option>
              <option>Massage Suédois — 60 min</option>
              <option>Massage Californien — 75 min</option>
              <option>Massage aux Pierres Chaudes — 90 min</option>
              <option>Réflexologie Plantaire — 45 min</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#7A6652]">
              Message (optionnel)
            </label>
            <textarea
              rows={3}
              placeholder="Précisions, disponibilités…"
              className="border-b border-[#EDE0CC] bg-transparent py-2.5 text-[#2D2416] placeholder:text-[#C4B09A] outline-none focus:border-[#C06040] transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 self-start px-8 py-3.5 bg-[#C06040] text-white text-sm rounded-full hover:bg-[#A04E30] transition-colors duration-200 shadow-md shadow-[#C06040]/20"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}
