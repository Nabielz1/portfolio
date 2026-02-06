import { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setFadeOut(true);

      const transitionTimer = setTimeout(() => {
        setLoading(false);

        const lenis = new Lenis({
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothTouch: true,
        });
        
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

      }, 500);

      return () => clearTimeout(transitionTimer);

    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className={fadeOut ? "fade-out" : ""}>
          <Loading />
        </div>
      ) : (
        <div className="fade-in">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;