import About from "./components/About";
import SlidesSection from "./components/SlidesSection";
import Horizontal from "./components/Horizontal";
import ProcessSection from "./components/ProcessSection";
import ThreeScroll from "./components/threescroll";
import Hero from "./components/Hero";
import TunnelSection from "./components/TunnelSection";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <main className="relative min-h-screen w-screen">
      <CustomCursor />
      <NavBar />
      <TunnelSection />
      <Hero />
      <About />
      <SlidesSection />
      <Horizontal />
      <ProcessSection />
      <ThreeScroll />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
