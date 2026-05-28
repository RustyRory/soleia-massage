export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#2D2416]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-[family-name:var(--font-serif)] text-[#F7F0E6] text-xl block mb-0.5">
            Soleia Massage
          </span>
          <p className="text-[#7A6652] text-xs tracking-widest uppercase">
            par Alexanne
          </p>
        </div>

        <div className="flex gap-8 text-[#7A6652] text-sm">
          {[
            { label: "Services", href: "#services" },
            { label: "À propos", href: "#about" },
            { label: "Témoignages", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#C06040] transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-[#7A6652] text-xs">
          © {new Date().getFullYear()} Soleia Massage
        </p>
      </div>
    </footer>
  );
}
