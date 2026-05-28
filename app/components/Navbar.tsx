"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F0E6]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(45,36,22,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-serif)] text-xl text-[#2D2416] tracking-wide">
            Soleia Massage
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#7A6652]">
            par Alexanne
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#7A6652] hover:text-[#2D2416] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-5 py-2 bg-[#C06040] text-white rounded-full hover:bg-[#A04E30] transition-colors duration-200"
            >
              Réserver
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
