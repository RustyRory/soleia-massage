import Image from "next/image";
import heroImage from "../../docs/assets/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col pt-16"
    >
      {/* Background */}
      <Image
        src={heroImage}
        alt="Alexanne — Soleia Massage"
        fill
        className="object-cover object-center brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D2416]/60 via-[#2D2416]/30 to-[#2D2416]/10" />

      {/* Contenu principal — centré verticalement */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto w-full py-12 md:py-16">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#E8C4A0] bg-[#E8C4A0]/15 px-4 py-2 rounded-full mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C4A0]" />
            Massage & Bien-être
          </span>

          <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F0E6] leading-[1.05] mb-5 md:mb-7 max-w-2xl">
            Soleia <em className="text-[#E8A882] not-italic">Massage</em>
          </h1>

          <p className="text-[#F7F0E6]/75 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm sm:max-w-md">
            Offrez-vous une parenthèse de douceur pour ralentir, apaiser le
            corps et le mental, retrouver votre énergie, vous reconnecter.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:+33615288890"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C06040] text-white text-sm rounded-full hover:bg-[#A04E30] transition-colors duration-200 shadow-md shadow-[#C06040]/30"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Appeler pour réserver
            </a>
            <a
              href="https://www.instagram.com/soleia.massage.alexanne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#F7F0E6]/40 text-[#F7F0E6] text-sm rounded-full hover:bg-[#F7F0E6]/10 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Nous suivre sur Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Stats — ancrées en bas */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-[#F7F0E6]/15 pt-6 md:pt-8 flex items-center gap-6 sm:gap-10 md:gap-14">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#F7F0E6]">5+</p>
              <p className="text-xs text-[#F7F0E6]/60 mt-0.5 whitespace-nowrap">Ans d&apos;expérience</p>
            </div>
            <div className="w-px h-7 bg-[#F7F0E6]/20 shrink-0" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#F7F0E6]">4</p>
              <p className="text-xs text-[#F7F0E6]/60 mt-0.5 whitespace-nowrap">Techniques maîtrisées</p>
            </div>
            <div className="w-px h-7 bg-[#F7F0E6]/20 shrink-0" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#F7F0E6]">100%</p>
              <p className="text-xs text-[#F7F0E6]/60 mt-0.5 whitespace-nowrap">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
