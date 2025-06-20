import React, { useEffect, useState, useRef } from "react";
import "../App.css"; // Import Tailwind CSS styles
import heroImage from "/src/assets/portofolio-hero-image.png";
import WAVES from "vanta/dist/vanta.waves.min"; // Mengganti import ke WAVES
import * as THREE from "three"; // Import Three.js for Vanta effect

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

    // Cleanup the Vanta effect on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section id="hero" className="flex items-center justify-between min-h-screen py-48 px-48 relative overflow-hidden">
      {/* Vanta background div */}
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>{" "}
      {/* Attach the ref here */}
      <div className="max-w-2xl flex flex-col justify-center z-10 text-white">
        <h1 className="text-6xl font-semibold mb-4">Hi, I'm</h1>
        <h1 className="text-6xl font-semibold mb-6">Rifqi Nabil Akbar</h1>

        <p className="text-gray-200 text-justify text-lg">
          Welcome to my professional portfolio website. This site showcases my work and projects, highlighting my skills in software development, data analysis, and system design. Explore my projects, learn more about my background, and feel free to get in touch!
        </p>
        <div className="flex space-x-4 py-6">
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-2 border-2 border-white text-white rounded hover:bg-gray-500"
          >
            My Portfolio
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Nabielz1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rifqi-nabil-akbar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/ripkii_n/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="max-w-md z-10">
        {/* Adjusting the hero image */}
        <img
          src={heroImage}
          alt="Portfolio Hero"
          className="w-[400px] h-[400px] rounded-full border-4 border-white object-cover object-top"
        />
      </div>
    </section>
  );
}

export default Hero;
