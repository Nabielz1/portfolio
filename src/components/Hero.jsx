import React, { useEffect, useRef } from "react";
import "../App.css";
import heroImage from "/src/assets/portofolio-hero-image.png";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

function Hero() {
  const vantaRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  // useEffect untuk Vanta.js background
  useEffect(() => {
    let vantaEffect = null;
    if (vantaRef.current) {
      vantaEffect = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0,
        shininess: 25.0,
        waveHeight: 10.0,
        waveSpeed: 1.4,
        zoom: 1.64,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    
    if (line1Ref.current && line2Ref.current) {
      const splitLine1 = new SplitText(line1Ref.current, { type: "words" });
      const splitLine2 = new SplitText(line2Ref.current, { type: "words" });

      const words1 = splitLine1.words;
      const words2 = splitLine2.words;

      const tl = gsap.timeline();

      tl.from(words1, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1, 
      });

      tl.from(words2, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1, 
      });

      return () => {
        splitLine1.revert();
        splitLine2.revert();
      };
    }
  }, []); 

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-x-hidden px-6">
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>
      <div className="container mx-auto flex w-full flex-col-reverse items-center justify-center gap-12 pt-32 pb-16 text-white lg:flex-row lg:justify-between lg:gap-12 lg:pt-24 lg:pb-24">
        <div className="z-10 flex flex-col items-center text-center lg:max-w-4xl lg:items-start lg:text-left">
          
          <h1 ref={line1Ref} className="mb-4 text-3xl font-semibold md:text-5xl lg:text-6xl" style={{ overflow: "hidden" }}>
            Hi, I'm
          </h1>
          <h1 ref={line2Ref} className="mb-6 text-3xl font-semibold md:text-5xl lg:text-6xl" style={{ overflow: "hidden" }}>
            Rifqi Nabil Akbar
          </h1>

          <p className="mb-6 text-base text-gray-200 md:text-md lg:text-lg text-justify">
            Welcome to my professional portfolio website. This site showcases my work and projects, highlighting my skills in software development, data analysis, and system design. Explore my projects, learn more about my background, and feel free to get in touch!
          </p>
          <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href="/assets/CV_Rifqi Nabil Akbar.pdf" 
              download="CV_Rifqi Nabil Akbar.pdf" 
              className="rounded bg-white px-8 py-3 text-black transition hover:bg-gray-300"
            >
              Download CV
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Nabielz1" target="_blank" rel="noopener noreferrer" className="text-2xl text-white transition hover:scale-110"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/rifqi-nabil-akbar/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white transition hover:scale-110"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/ripkii_n/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white transition hover:scale-110"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="z-10 w-full max-w-[280px] aspect-square shrink-0 rounded-full border-4 border-white md:max-w-[350px]">
          <img
            src={heroImage}
            alt="Portfolio Hero"
            className="h-full w-full rounded-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;