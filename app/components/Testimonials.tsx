const testimonials = [
  {
    quote:
      "Une expérience hors du temps. J'avais l'impression de flotter après la séance. Je recommande les yeux fermés.",
    name: "Marie L.",
    soin: "Massage Californien",
  },
  {
    quote:
      "Professionnelle, à l'écoute et bienveillante. Le massage californien était tout simplement sublime.",
    name: "Sophie R.",
    soin: "Massage Suédois",
  },
  {
    quote:
      "J'arrive stressée, je repars sereine. C'est devenu un rituel mensuel que je ne pourrais plus m'enlever.",
    name: "Camille D.",
    soin: "Réflexologie Plantaire",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[#EDF2EB]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#7A9A72] shrink-0" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#7A9A72]">
            Avis clients
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-16 ml-12">
          Ce qu&apos;elles disent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#7A9A72]/10 flex flex-col"
            >
              <span className="font-[family-name:var(--font-serif)] text-5xl text-[#C06040] leading-none mb-4">
                &ldquo;
              </span>
              <p className="text-[#7A6652] text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div>
                <p className="text-[#2D2416] font-medium text-sm">{t.name}</p>
                <p className="text-[#7A9A72] text-xs mt-0.5">{t.soin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
