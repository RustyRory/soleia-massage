import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tarifs from "./components/Tarifs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getSiteContent } from "@/lib/content";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Navbar />
      <main>
        <Hero tagline={content.hero.tagline} contact={content.contact} />
        <Services content={content.services} />
        <Tarifs
          tarifs={content.tarifs}
          address={{ name: content.contact.addressName, line: content.contact.addressLine }}
        />
        <About paragraphs={content.about.paragraphs} />
        <Suspense>
          <Testimonials />
        </Suspense>
        <Suspense>
          <Gallery />
        </Suspense>
        <Contact contact={content.contact} />
      </main>
      <Footer />
    </>
  );
}
