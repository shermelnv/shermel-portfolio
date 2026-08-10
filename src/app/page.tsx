import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CareerJourney } from "@/components/CareerJourney";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TechStrip } from "@/components/TechStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <CareerJourney />
        <Experience />
        <Skills />
        <Projects />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
