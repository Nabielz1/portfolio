import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import heroImage from "/src/assets/portofolio-hero-image.png";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { gsap } from "gsap";

function Hero() {
  const { t } = useTranslation();
  const vantaRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    let vantaEffect = WAVES({
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
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    const heroText = heroTextRef.current;
    let tl;

    if (heroText) {
      const words = heroText.querySelectorAll("span.word");
      if (words.length > 0) {
        gsap.set(words, { y: 40, opacity: 0 });
        tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(words, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
        });
      }
    }
    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [t]);

  const splitWords = (phrase) => {
    if (!phrase) return null;
    const wordsArray = phrase.split(" ");
    
    return wordsArray.map((word, i) => (
      <React.Fragment key={word + i}>
        <span
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <span className="word" style={{ display: "inline-block" }}>
            {word}
          </span>
        </span>
        {i < wordsArray.length - 1 && ' '}
      </React.Fragment>
    ));
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-x-hidden px-6">
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>
      <div className="container mx-auto flex w-full flex-col-reverse items-center justify-center gap-12 pt-32 pb-16 text-white lg:flex-row lg:justify-between lg:gap-12 lg:pt-24 lg:pb-24">
        <div className="z-10 flex flex-col items-center text-center lg:max-w-4xl lg:items-start lg:text-left">
          
          <div ref={heroTextRef}>
            <h1 className="mb-4 text-3xl font-semibold md:text-5xl lg:text-6xl" style={{ lineHeight: '1.2' }}>
              {splitWords(t('hero_greeting'))}
            </h1>
            <h1 className="mb-6 text-3xl font-semibold md:text-5xl lg:text-6xl" style={{ lineHeight: '1.2' }}>
              {splitWords(t('hero_name'))}
            </h1>
          </div>

          <p className="mb-6 text-base text-gray-200 md:text-md lg:text-lg text-justify">
            {t('hero_description')}
          </p>
          <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href="/assets/CV_Rifqi Nabil Akbar.pdf" 
              download="CV_Rifqi Nabil Akbar.pdf" 
              className="rounded bg-white px-8 py-3 text-black transition hover:bg-gray-300"
            >
              {t('hero_download_cv')}
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