const tarifs = [
  { duree: "25 min", prix: "65€" },
  { duree: "50 min", prix: "95€" },
];

const ADDRESS = "Alba Plage, 140 Quai de Caravello, Quartier Deï, 83600 Fréjus, France";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-24 md:py-32 px-6 bg-[#2D2416]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#C07A4A] mt-3 shrink-0" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#C07A4A]">
            Tarifs
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#FAF2EE] mb-4 ml-12">
          Mes Tarifs
        </h2>
        <p className="text-[#FAF2EE]/60 text-base ml-12 mb-16 max-w-lg">
          Massages proposés à Alba Plage, à Fréjus, ou à domicile. Le tarif
          dépend uniquement de la durée de la séance.
        </p>

        <div className="bg-[#FAF2EE]/5 border border-[#FAF2EE]/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-0">
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <p className="text-xs tracking-[0.2em] uppercase text-[#C07A4A] mb-2">
              Lieu
            </p>
            <p className="font-[family-name:var(--font-serif)] text-2xl text-[#FAF2EE] mb-1">
              Alba Plage <span className="text-[#FAF2EE]/40 text-base">ou</span> à Domicile
            </p>
            <p className="text-[#FAF2EE]/50 text-sm">
              140 Quai de Caravello, Quartier Deï, 83600 Fréjus
            </p>
          </div>

          <div className="hidden md:block w-px bg-[#FAF2EE]/10" />

          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-8 md:gap-12">
              {tarifs.map((t, i) => (
                <div key={t.duree} className="flex items-center gap-8 md:gap-12">
                  {i > 0 && <div className="w-px h-14 bg-[#FAF2EE]/10" />}
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#FAF2EE]">
                      {t.prix}
                    </p>
                    <p className="text-[#FAF2EE]/50 text-xs tracking-widest uppercase mt-2">
                      {t.duree}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#FAF2EE]/40 text-xs tracking-widest uppercase">
              Tarifs identiques à domicile
            </p>
          </div>

          <div className="hidden md:block w-px bg-[#FAF2EE]/10" />

          <div className="flex-1 flex items-center justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C07A4A] text-white text-sm rounded-full hover:bg-[#9A5C34] transition-colors duration-200 shadow-md shadow-[#C07A4A]/20"
            >
              Réserver une séance
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl overflow-hidden border border-[#FAF2EE]/10 relative group">
          <iframe
            src={MAPS_EMBED_URL}
            title={`Localisation — ${ADDRESS}`}
            width="100%"
            height="320"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-[#2D2416] text-[#FAF2EE] text-xs tracking-widest uppercase rounded-full shadow-md hover:bg-[#3D3020] transition-colors duration-200"
          >
            Ouvrir dans Maps
          </a>
        </div>
      </div>
    </section>
  );
}
