import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import HowItWorks from "../../components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Footer />
    </>
  );
}