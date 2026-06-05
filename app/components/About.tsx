import Image from "next/image";
import aboutImage from "../../docs/assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#E8D8CC]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#C07A4A]/15" />
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative max-w-sm mx-auto md:mx-0">
            <Image
              src={aboutImage}
              alt="Alexanne — Praticienne en massage bien-être"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 384px, 448px"
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-6 bg-gradient-to-t from-[#2D2416] via-[#2D2416]/80 to-transparent text-center">
              <p className="font-[family-name:var(--font-serif)] text-[#FAF2EE] text-lg">Alexanne</p>
              <p className="text-[#FAF2EE]/70 text-xs tracking-wider mt-0.5">Praticienne en massage bien-être</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#7A9A72]/25" />
        </div>

        {/* Contenu */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#C07A4A] shrink-0" />
            <p className="text-xs tracking-[0.2em] uppercase text-[#C07A4A]">
              À propos de moi
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-8 leading-snug">
            À propos <br />
            <em className="not-italic text-[#C07A4A]">de moi</em>
          </h2>

          <div className="space-y-4 text-[#7A6652] text-sm leading-relaxed mb-10">
            <p>
              Je m&apos;appelle Alexanne, et le bien-être est au cœur de ma
              façon d&apos;être.
            </p>
            <p>
              Je propose des moments de présence, de douceur et d&apos;écoute,
              entièrement dédié à votre détente.
            </p>
            <p>
              Je masse intuitivement en étant pleinement présente, à
              l&apos;écoute du corps et de l&apos;énergie de chaque personne
              avec un toucher sincère guidé par le cœur.
            </p>
            <p>
              Mon intention est de vous accompagner à relâcher les tensions,
              apaiser le mental et vous reconnecter à vous-même, dans un espace
              de confiance et de lâcher-prise.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#C07A4A] text-white text-sm rounded-full hover:bg-[#9A5C34] transition-colors duration-200 shadow-md shadow-[#C07A4A]/20"
          >
            Me contacter
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
