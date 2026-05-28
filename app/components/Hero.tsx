export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#F7F0E6] flex items-center px-6 md:px-10 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-20">
        {/* Contenu */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C06040] bg-[#C06040]/10 px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C06040]" />
            Massage & Bien-être
          </span>

          <h1 className="font-[family-name:var(--font-serif)] font-light text-5xl md:text-6xl lg:text-7xl text-[#2D2416] leading-[1.1] mb-6">
            Soleia <em className="text-[#C06040] not-italic">Massage</em>
          </h1>

          <p className="text-[#7A6652] text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Offrez-vous une parenthèse de douceur pour ralentir, apaiser le
            corps et le mental, retrouver votre énergie, vous reconnecter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@soleiamassage.fr"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C06040] text-white text-sm rounded-full hover:bg-[#A04E30] transition-colors duration-200 shadow-md shadow-[#C06040]/20"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Prendre RDV par email
            </a>
            <a
              href="tel:+33600000000"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#C06040]/40 text-[#C06040] text-sm rounded-full hover:bg-[#C06040]/8 transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Prendre RDV par téléphone
            </a>
          </div>

          <div className="flex items-center gap-8 mt-14 pt-10 border-t border-[#2D2416]/10">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#2D2416]">5+</p>
              <p className="text-xs text-[#7A6652] mt-0.5">Ans d&apos;expérience</p>
            </div>
            <div className="w-px h-8 bg-[#2D2416]/10" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#2D2416]">4</p>
              <p className="text-xs text-[#7A6652] mt-0.5">Techniques maîtrisées</p>
            </div>
            <div className="w-px h-8 bg-[#2D2416]/10" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#2D2416]">100%</p>
              <p className="text-xs text-[#7A6652] mt-0.5">Clients satisfaits</p>
            </div>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="relative hidden md:block">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#7A9A72]/20" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-[#C06040]/15" />

          <div className="relative aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#D4B896] to-[#BFA080] overflow-hidden flex items-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#8A6040]/60 text-xs tracking-widest uppercase">Photo</span>
            </div>
            <div className="relative w-full p-6 bg-white/20 backdrop-blur-sm">
              <p className="font-[family-name:var(--font-serif)] text-white text-xl">Alexanne</p>
              <p className="text-white/70 text-xs mt-0.5">Praticienne en massage bien-être</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
