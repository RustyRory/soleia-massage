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

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/soleia.massage.alexanne"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Soleia Massage"
            className="text-[#7A6652] hover:text-[#C06040] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <p className="text-[#7A6652] text-xs">© 2026 Soleia Massage</p>
        </div>
      </div>
    </footer>
  );
}
