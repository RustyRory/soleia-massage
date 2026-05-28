import type { Review } from "@/lib/reviews";

type Props = { reviews: Review[] };

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#F5A623]" : "text-[#D4C9B8]"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ reviews }: Props) {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[#EDF2EB]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-0.5 bg-[#7A9A72] shrink-0" />
          <p className="text-xs tracking-[0.2em] uppercase text-[#7A9A72]">
            Avis clients
          </p>
        </div>
        <div className="flex items-end justify-between mb-16 ml-12 flex-wrap gap-4">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-4xl md:text-5xl text-[#2D2416]">
            Ce qu&apos;elles disent
          </h2>
          {/* Badge Google */}
          <div className="flex items-center gap-2 text-xs text-[#7A6652]">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Avis Google vérifiés
          </div>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#7A9A72]/10 flex flex-col"
              >
                <Stars rating={r.rating} />
                <p className="text-[#7A6652] text-sm leading-relaxed flex-1 mb-6">
                  {r.text}
                </p>
                <div className="flex items-center gap-3">
                  {r.photoUri && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={r.photoUri}
                      alt={r.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-[#2D2416] font-medium text-sm">{r.author}</p>
                    <p className="text-[#7A9A72] text-xs mt-0.5">{r.relativeTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#7A6652] text-sm ml-12">
            Les avis seront affichés prochainement.
          </p>
        )}
      </div>
    </section>
  );
}
