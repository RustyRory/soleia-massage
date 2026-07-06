import Image from "next/image";
import heroImage from "../../docs/assets/hero.png";
import type { SiteContent } from "@/lib/defaultContent";

export default function Hero({
  tagline,
  contact,
}: {
  tagline: string;
  contact: Pick<SiteContent["contact"], "phoneHref" | "instagram">;
}) {
  return (
    <section
      id="hero"
      className="relative md:min-h-[100svh] flex flex-col pt-16"
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

      {/* Contenu principal */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto w-full py-10 md:py-16">

          {/* Logo — h1 sr-only pour le référencement */}
          <h1 className="sr-only">Soleia Massage — Massages solaires à domicile par Alexanne</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Soleia Massage"
            className="w-64 sm:w-80 md:w-[26rem] lg:w-[30rem] mb-6 md:mb-10"
          />

          <p className="text-[#FAF2EE]/75 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 max-w-sm md:max-w-md">
            {tagline}
          </p>

          <div className="flex flex-row flex-wrap gap-3">
            <a
              href={`tel:${contact.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-[#C07A4A] text-white text-sm rounded-full hover:bg-[#9A5C34] transition-colors duration-200 shadow-md shadow-[#C07A4A]/30"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Appeler
            </a>
            <a
              href={`sms:${contact.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 bg-[#C07A4A]/20 border border-[#C07A4A]/50 text-[#FAF2EE] text-sm rounded-full hover:bg-[#C07A4A]/30 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              SMS
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 border border-[#FAF2EE]/40 text-[#FAF2EE] text-sm rounded-full hover:bg-[#FAF2EE]/10 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Stats — visibles uniquement sur desktop */}
      <div className="hidden md:block relative z-10 px-10 lg:px-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-[#FAF2EE]/15 pt-8 flex items-center gap-14">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#FAF2EE]">5+</p>
              <p className="text-xs text-[#FAF2EE]/60 mt-0.5">Ans d&apos;expérience</p>
            </div>
            <div className="w-px h-7 bg-[#FAF2EE]/20" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#FAF2EE]">4</p>
              <p className="text-xs text-[#FAF2EE]/60 mt-0.5">Techniques maîtrisées</p>
            </div>
            <div className="w-px h-7 bg-[#FAF2EE]/20" />
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#FAF2EE]">100%</p>
              <p className="text-xs text-[#FAF2EE]/60 mt-0.5">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
