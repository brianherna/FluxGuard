import Navbar from "../../components/layout/Navbar";

import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import HowItWorks from "../../components/sections/HowItWorks";

import Footer from "../../components/layout/Footer";

import Technologies from "../../components/sections/Technologies";

import Features from "../../components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Technologies />
      <Features />
      <Footer />
    </>
  );
}