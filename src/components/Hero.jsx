// src/components/Hero.jsx

import React, { useEffect, useState } from "react";
import "../App.css"; // Import Tailwind CSS styles
import heroImage from "/src/assets/portofolio-hero-image.png";

function Hero() {
  const [text, setText] = useState("");
  const textList = [
    "I'm a Data Scientist",
    "I'm a Data Analyst",
    "I'm a Machine Learning Engineer",
    "I'm a Backend Developer",
    "I'm a Web Developer",
  ];

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const type = () => {
      if (index >= textList.length) index = 0;
      currentText = textList[index];

      if (isDeleting) {
        setText(currentText.substring(0, charIndex--));
      } else {
        setText(currentText.substring(0, charIndex++));
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    };

    type();
  }, []);

  return (
    <section id="hero" className="flex items-center justify-between min-h-screen py-20 px-48 bg-white">
      <div className="max-w-2xl flex flex-col justify-center">
        <h1 className="text-5xl font-semibold mb-8">
          RIFQI NABIL AKBAR <span className="text-black">PORTFOLIO</span>
        </h1>
        <div className="min-h-[60px]">
          <p className="text-xl">{text}</p>
        </div>
        <p className="text-gray-600 text-justify">
          Welcome to my professional portfolio. My name is Rifqi Nabil Akbar, a third-year Information Systems student at Satya Wacana Christian University with a strong interest in technology, software development, system design, business analysis, and data analysis. Passionate about learning and applying concepts that bridge technology and business, I aim to create innovative and effective solutions that add real value. Throughout my journey, I have gained hands-on experience in designing intuitive systems, analyzing data, and collaborating with teams to drive impactful solutions.
        </p>
        <p className="text-gray-600 text-justify mt-4">
          With a commitment to excellence and continuous learning, I am focused on delivering meaningful contributions to the tech industry by leveraging data-driven insights and problem-solving techniques. My journey is just beginning, and I look forward to exploring new opportunities that challenge my skills and expand my knowledge.
        </p>
        <div className="flex space-x-4 py-6">
          <a href="#contact" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">Contact Me</a>
          <a href="#projects" className="px-6 py-2 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-100">My Portfolio</a>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/Nabielz1" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rifqi-nabil-akbar/" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/ripkii_n/" target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="max-w-md">
        <img src={heroImage} alt="Portfolio Hero" className="w-full h-auto" />
      </div>
    </section>
  );
}

export default Hero;
