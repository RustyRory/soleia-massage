"use client";

import { useEffect, useState } from "react";
import SoleilLogo from "./SoleilLogo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "À propos", href: "#about" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Photos", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF2EE]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(45,36,22,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 leading-none">
          <SoleilLogo className="w-7 h-7 shrink-0" scrolled={scrolled} />

          {/* Titre masqué sur le hero, visible dans les autres sections */}
          <div
            className={`flex flex-col overflow-hidden transition-all duration-500 ${
              onHero ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
            }`}
          >
            <span className={`font-[family-name:var(--font-serif)] text-xl tracking-wide whitespace-nowrap transition-colors duration-500 ${scrolled ? "text-[#2D2416]" : "text-[#FAF2EE]"}`}>
              Soleia Massage
            </span>
            <span className={`text-[10px] tracking-[0.2em] whitespace-nowrap transition-colors duration-500 ${scrolled ? "text-[#7A6652]" : "text-[#FAF2EE]/70"}`}>
              Par Alexanne
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors duration-500 ${scrolled ? "text-[#7A6652] hover:text-[#2D2416]" : "text-[#FAF2EE]/85 hover:text-[#FAF2EE]"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-5 py-2 bg-[#C07A4A] text-white rounded-full hover:bg-[#9A5C34] transition-colors duration-200"
            >
              Réserver
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
