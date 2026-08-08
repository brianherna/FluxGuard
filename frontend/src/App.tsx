import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Home/Hero";
import About from "./pages/Home/About";
import HowItWorks from "./pages/Home/HowItWorks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
    </>
  );
}

export default App;