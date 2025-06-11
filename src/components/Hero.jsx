import React from "react";
import heroImage from "/src/assets/portofolio-hero-image.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-gray-900 py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="hero-text flex-1">
          <h1 className="text-4xl md:text-5xl font-bold">PORTFOLIO <span className="text-black">RIFQI NABIL AKBAR</span></h1>
          <p className="text-xl my-4">
            Welcome to my professional portfolio. My name is Rifqi Nabil Akbar...
          </p>
          <div className="btn-container flex space-x-4">
            <a href="#contact" className="btn btn-primary px-6 py-3">Contact Me</a>
            <a href="#projects" className="btn btn-outline px-6 py-3">My Portfolio</a>
          </div>
        </div>
        <div className="hero-image flex-1">
          <img src={heroImage} alt="Portfolio Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
