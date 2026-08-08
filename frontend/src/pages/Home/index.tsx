import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import PlatformCarousel from "../../components/sections/PlatformCarousel";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";

export default function Home() {
  return (
    <main className="fluxguard">
      <Navbar />

      <Hero />

      <About />

      <PlatformCarousel />

      <Features />

      <HowItWorks />
    </main>
  );
}