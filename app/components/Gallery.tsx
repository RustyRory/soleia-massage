"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const placeholders = [
  { id: 1, bg: "from-[#D4B896] to-[#C0A07A]" },
  { id: 2, bg: "from-[#A8C4B0] to-[#8AAA90]" },
  { id: 3, bg: "from-[#C4A882] to-[#A88A62]" },
  { id: 4, bg: "from-[#B8C4A8] to-[#98A888]" },
  { id: 5, bg: "from-[#D0B8A0] to-[#B89878]" },
  { id: 6, bg: "from-[#A0B8B0] to-[#809890]" },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#2D2416] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-0.5 bg-[#C06040] shrink-0" />
              <p className="text-xs tracking-[0.2em] uppercase text-[#C06040]">
                Galerie
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#F7F0E6] ml-12">
              Photos
            </h2>
          </div>

          {/* Flèches */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Photo précédente"
              className="w-12 h-12 rounded-full border border-[#F7F0E6]/20 text-[#F7F0E6] flex items-center justify-center hover:bg-[#F7F0E6]/10 disabled:opacity-30 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Photo suivante"
              className="w-12 h-12 rounded-full border border-[#F7F0E6]/20 text-[#F7F0E6] flex items-center justify-center hover:bg-[#F7F0E6]/10 disabled:opacity-30 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 px-6 md:px-[calc((100vw-72rem)/2+1.5rem)]">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className="flex-none w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <div className={`w-full h-full bg-gradient-to-br ${p.bg} flex items-center justify-center`}>
                <div className="text-center">
                  <svg className="w-8 h-8 text-white/30 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="text-white/30 text-xs tracking-widest uppercase">Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8 px-6">
        {placeholders.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Aller à la photo ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-6 h-1.5 bg-[#C06040]"
                : "w-1.5 h-1.5 bg-[#F7F0E6]/30 hover:bg-[#F7F0E6]/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
