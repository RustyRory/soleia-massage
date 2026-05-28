export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#2D2416]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-[family-name:var(--font-serif)] text-[#F7F0E6] text-xl block mb-1">
            Alexanne Brichon
          </span>
          <p className="text-[#7A6652] text-xs tracking-widest uppercase">
            Massage &amp; Bien-être
          </p>
        </div>

        <div className="flex gap-8 text-[#7A6652] text-sm">
          {["Services", "À propos", "Témoignages", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace("à propos", "about").replace("témoignages", "testimonials")}`}
              className="hover:text-[#C06040] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-[#7A6652] text-xs">
          © {new Date().getFullYear()} Alexanne Brichon
        </p>
      </div>
    </footer>
  );
}
