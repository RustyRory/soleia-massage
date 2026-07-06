import type { SiteContent } from "@/lib/defaultContent";

const COLORS = ["bg-[#C07A4A]/10 text-[#C07A4A]", "bg-[#7A9A72]/10 text-[#7A9A72]"];

export default function Services({ content }: { content: SiteContent["services"] }) {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-[#FAF2EE]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#C07A4A] mt-3 shrink-0" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#C07A4A]">
            Mes soins
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-4 ml-12">
          Mes Soins & Bienfaits
        </h2>
        <p className="text-[#7A6652] text-base ml-12 mb-16 max-w-lg">
          {content.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.bienfaits.map((b, i) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#2D2416]/5"
            >
              <span
                className={`inline-block text-xs font-medium tracking-widest px-3 py-1 rounded-full mb-5 ${COLORS[i % COLORS.length]}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#2D2416] mb-3">
                {b.title}
              </h3>
              <p className="text-[#7A6652] text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
