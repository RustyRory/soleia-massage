import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getGalleryPhotos } from "@/lib/gallery";
import { getGoogleReviews } from "@/lib/reviews";

export default async function Home() {
  const [photos, reviews] = await Promise.all([
    getGalleryPhotos(),
    getGoogleReviews(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials reviews={reviews} />
        <Gallery photos={photos} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
