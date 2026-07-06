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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Tarifs />
        <About />
        <Suspense>
          <Testimonials />
        </Suspense>
        <Suspense>
          <Gallery />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
