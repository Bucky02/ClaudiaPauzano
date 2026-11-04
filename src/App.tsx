import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Languages from "@/components/Languages";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/config/site";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {site.header.skipLink}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Languages />
        <Portfolio />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
