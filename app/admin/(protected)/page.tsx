import { getRawSiteContent } from "@/lib/content";
import { listPhotos } from "@/lib/drive";
import ContactForm from "../components/ContactForm";
import TarifsForm from "../components/TarifsForm";
import TextesForm from "../components/TextesForm";
import PhotosManager from "../components/PhotosManager";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[#2D2416] mb-4">
      {children}
    </h2>
  );
}

export default async function AdminDashboardPage() {
  const content = await getRawSiteContent();

  let photos: Awaited<ReturnType<typeof listPhotos>> = [];
  let photosError: string | null = null;
  try {
    photos = await listPhotos();
  } catch {
    photosError = "Compte de service Google Drive non configuré — voir GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY dans .env.local.";
  }

  return (
    <>
      <section>
        <SectionTitle>Coordonnées</SectionTitle>
        <ContactForm initial={content.contact} />
      </section>

      <section>
        <SectionTitle>Tarifs</SectionTitle>
        <TarifsForm initial={content.tarifs} />
      </section>

      <section>
        <SectionTitle>Textes des sections</SectionTitle>
        <TextesForm
          heroTagline={content.hero.tagline}
          aboutParagraphs={content.about.paragraphs}
          servicesIntro={content.services.intro}
          bienfaits={content.services.bienfaits}
        />
      </section>

      <section>
        <SectionTitle>Photos</SectionTitle>
        {photosError ? (
          <p className="text-sm text-[#B5452F] bg-white rounded-2xl p-6 border border-[#2D2416]/5">
            {photosError}
          </p>
        ) : (
          <PhotosManager
            photos={photos.map((p) => ({
              id: p.id,
              name: p.name,
              thumb: `https://drive.google.com/thumbnail?id=${p.id}&sz=w400`,
            }))}
          />
        )}
      </section>
    </>
  );
}
