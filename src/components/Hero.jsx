import React, { useEffect, useState } from "react";
import "../App.css"; // Import Tailwind CSS styles
import heroImage from "/src/assets/portofolio-hero-image.png";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three"; // Import Three.js for Vanta effect

function Hero() {

  useEffect(() => {
    // Create Vanta background effect
    const vantaEffect = NET({
      el: document.getElementById("vanta-bg"), // Set the Vanta background element
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffffff,
      backgroundColor: 0x0,
      points: 12.00,
      maxDistance: 22.00,
      spacing: 18.00,
      THREE: THREE
    });

    // Cleanup the Vanta effect on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section className="flex items-center justify-between min-h-screen py-48 px-48 relative overflow-hidden">
      {/* Vanta background div */}
      <div id="vanta-bg" className="fixed inset-0 -z-10"></div> {/* Vanta effect will be applied here */}

      <div className="max-w-2xl flex flex-col justify-center z-10 text-white">
        <h1 className="text-5xl font-semibold mb-4">
          Hi, I'm
        </h1>
        <h1 className="text-5xl font-semibold mb-8">
          Rifqi Nabil Akbar
        </h1>

        <p className="text-gray-200 text-justify">
          Welcome to my professional portfolio. My name is Rifqi Nabil Akbar, a third-year Information Systems student at Satya Wacana Christian University with a strong interest in technology, software development, system design, business analysis, and data analysis. Passionate about learning and applying concepts that bridge technology and business, I aim to create innovative and effective solutions that add real value. Throughout my journey, I have gained hands-on experience in designing intuitive systems, analyzing data, and collaborating with teams to drive impactful solutions.
        </p>
        <p className="text-gray-200 text-justify mt-4">
          With a commitment to excellence and continuous learning, I am focused on delivering meaningful contributions to the tech industry by leveraging data-driven insights and problem-solving techniques. My journey is just beginning, and I look forward to exploring new opportunities that challenge my skills and expand my knowledge.
        </p>
        <div className="flex space-x-4 py-6">
          <a href="#contact" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">Contact Me</a>
          <a href="#projects" className="px-6 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-100">My Portfolio</a>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/Nabielz1" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rifqi-nabil-akbar/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/ripkii_n/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="max-w-md z-10">
        <img src={heroImage} alt="Portfolio Hero" className="w-full h-auto" />
      </div>
    </section>
  );
}

export default Hero;
