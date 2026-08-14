import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import PlatformCarousel from "../../components/sections/PlatformCarousel";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import Technologies from "../../components/sections/Technologies";
import Footer from "../../components/layout/Footer";
import BackToTop from "../../components/ui/BackToTop";

const Home = () => {
  return (
    <main id="inicio">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* PROYECTO */}
      <section id="proyecto">
        <About />
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona">
        <HowItWorks />
      </section>

      {/* CARACTERÍSTICAS */}
      <section id="monitoreo">
        <Features />
      </section>

      {/* TECNOLOGÍA */}
      <section id="tecnologia">
        <Technologies />
      </section>

      {/* RECURSOS / PLATAFORMA */}
      <section id="recursos">
        <PlatformCarousel />
      </section>

      {/* CONTACTO */}
      <Footer />

      <BackToTop />

    </main>
  );
};

export default Home;