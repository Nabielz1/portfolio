import React, { useEffect, useRef } from "react";
import "../App.css";
import heroImage from "/src/assets/portofolio-hero-image.png";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

function Hero() {
  const vantaRef = useRef(null);

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
        waveSpeed: 1.40,
        zoom: 1.64,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-x-hidden"
    >
      <div ref={vantaRef} className="absolute inset-0 -z-10"></div>

      {/* --- PERUBAHAN STRUKTUR CONTAINER --- */}
      <div className="mx-auto flex w-full max-w-screen-lg flex-col-reverse items-center justify-center gap-12 px-6 pt-32 pb-16 text-white lg:flex-row lg:justify-between lg:gap-0 lg:pt-24 lg:pb-24">
        
        {/* Kontainer Teks (Tidak ada perubahan) */}
        <div className="z-10 flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl">Hi, I'm</h1>
          <h1 className="mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl">Rifqi Nabil Akbar</h1>
          <p className="mb-6 text-base text-gray-200 md:text-lg text-justify">
            Welcome to my professional portfolio website. This site showcases my work and projects, highlighting my skills in software development, data analysis, and system design. Explore my projects, learn more about my background, and feel free to get in touch!
          </p>
          <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="rounded bg-white px-6 py-3 text-black transition hover:bg-gray-300">Contact Me</a>
            <a href="#projects" className="rounded border-2 border-white px-6 py-3 text-white transition hover:bg-white hover:bg-opacity-20">My Portfolio</a>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Nabielz1" target="_blank" rel="noopener noreferrer" className="text-2xl text-white transition hover:scale-110"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/rifqi-nabil-akbar/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white transition hover:scale-110"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/ripkii_n/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white transition hover:scale-110"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* --- PERUBAHAN TOTAL PADA GAMBAR --- */}
        {/* 1. Kita styling DIV pembungkusnya untuk ukuran dan bentuk */}
        <div className="z-10 w-full max-w-[280px] aspect-square shrink-0 rounded-full border-4 border-white md:max-w-[350px]">
          {/* 2. Gambar di dalamnya hanya mengisi ruang yang sudah sempurna */}
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