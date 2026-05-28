const bienfaits = [
  {
    num: "01",
    title: "Relâcher les tensions du corps",
    description: "Un toucher sincère et attentif qui libère les nœuds musculaires et invite le corps à se détendre pleinement.",
    color: "bg-[#C06040]/10 text-[#C06040]",
  },
  {
    num: "02",
    title: "Apaiser le mental, ralentir",
    description: "Une présence douce et bienveillante pour calmer le flot des pensées et retrouver un rythme plus naturel.",
    color: "bg-[#7A9A72]/10 text-[#7A9A72]",
  },
  {
    num: "03",
    title: "Se reconnecter à soi, à ses sensations",
    description: "En étant pleinement à l'écoute de votre corps et de votre énergie, chaque séance devient un retour à soi.",
    color: "bg-[#C06040]/10 text-[#C06040]",
  },
  {
    num: "04",
    title: "Retrouver calme et équilibre intérieur",
    description: "Un espace de confiance et de lâcher-prise pour repartir ressourcé·e, ancré·e et pleinement présent·e.",
    color: "bg-[#7A9A72]/10 text-[#7A9A72]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#C06040] mt-3 shrink-0" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#C06040]">
            Mes soins
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-4 ml-12">
          Mes Soins & Bienfaits
        </h2>
        <p className="text-[#7A6652] text-base ml-12 mb-16 max-w-lg">
          Un moment pour vous recentrer, relâcher et respirer. Mes massages sont
          pensés pour vous offrir une détente profonde, physique et mentale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bienfaits.map((b) => (
            <div
              key={b.num}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#2D2416]/5"
            >
              <span className={`inline-block text-xs font-medium tracking-widest px-3 py-1 rounded-full mb-5 ${b.color}`}>
                {b.num}
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

        <p className="text-center font-[family-name:var(--font-serif)] text-lg italic text-[#7A6652] mt-14">
          &ldquo; Chaque séance est une invitation à revenir vers soi dans la douceur et la présence. &rdquo;
        </p>
      </div>
    </section>
  );
}
