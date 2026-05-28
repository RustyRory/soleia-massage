const services = [
  {
    num: "01",
    name: "Massage Suédois",
    description:
      "Un massage classique aux manœuvres douces et enveloppantes. Idéal pour se détendre et évacuer les tensions du quotidien.",
    duration: "60 min",
    price: "70 €",
    color: "bg-[#C06040]/10 text-[#C06040]",
  },
  {
    num: "02",
    name: "Massage Californien",
    description:
      "Des effleurages longs et fluides qui embrassent tout le corps. Une expérience profondément relaxante et sensorielle.",
    duration: "75 min",
    price: "80 €",
    color: "bg-[#7A9A72]/10 text-[#7A9A72]",
  },
  {
    num: "03",
    name: "Massage aux Pierres Chaudes",
    description:
      "La chaleur des pierres volcaniques libère les tensions musculaires en profondeur et favorise un lâcher-prise total.",
    duration: "90 min",
    price: "95 €",
    color: "bg-[#C06040]/10 text-[#C06040]",
  },
  {
    num: "04",
    name: "Réflexologie Plantaire",
    description:
      "Une technique ciblée sur les zones réflexes du pied pour rééquilibrer l'ensemble des organes et retrouver vitalité.",
    duration: "45 min",
    price: "55 €",
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
            Soins proposés
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416] mb-16 ml-12">
          Les soins
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#2D2416]/5"
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className={`text-xs font-medium tracking-widest px-3 py-1 rounded-full ${service.color}`}
                >
                  {service.num}
                </span>
                <span className="font-[family-name:var(--font-serif)] text-2xl text-[#2D2416] font-light">
                  {service.price}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#2D2416] mb-3">
                {service.name}
              </h3>
              <p className="text-[#7A6652] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#7A9A72]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {service.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
