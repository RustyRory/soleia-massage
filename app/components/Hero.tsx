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
            Massage &amp; Bien-être
          </span>

          <h1 className="font-[family-name:var(--font-serif)] font-light text-5xl md:text-6xl lg:text-7xl text-[#2D2416] leading-[1.1] mb-6">
            L&apos;art du soin,{" "}
            <em className="text-[#C06040] not-italic">au naturel</em>
          </h1>

          <p className="text-[#7A6652] text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Des massages sur-mesure pour vous reconnecter à votre corps et
            retrouver un équilibre profond, dans un espace chaleureux et
            bienveillant.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-[#C06040] text-white text-sm rounded-full hover:bg-[#A04E30] transition-colors duration-200 shadow-md shadow-[#C06040]/20"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#services"
              className="px-7 py-3.5 border border-[#C06040]/40 text-[#C06040] text-sm rounded-full hover:bg-[#C06040]/8 transition-colors duration-200"
            >
              Découvrir les soins
            </a>
          </div>

          <div className="flex items-center gap-8 mt-14 pt-10 border-t border-[#2D2416]/10">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#2D2416]">
                5+
              </p>
              <p className="text-xs text-[#7A6652] mt-0.5">Ans d&apos;expérience</p>
            </div>
            <div className="w-px h-8 bg-[#2D2416]/10" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#2D2416]">
                4
              </p>
              <p className="text-xs text-[#7A6652] mt-0.5">Techniques maîtrisées</p>
            </div>
            <div className="w-px h-8 bg-[#2D2416]/10" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#2D2416]">
                100%
              </p>
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
              <span className="text-[#8A6040]/60 text-xs tracking-widest uppercase">
                Photo
              </span>
            </div>
            <div className="relative w-full p-6 bg-white/20 backdrop-blur-sm">
              <p className="font-[family-name:var(--font-serif)] text-white text-xl">
                Alexanne Brichon
              </p>
              <p className="text-white/70 text-xs mt-0.5">Praticienne certifiée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
