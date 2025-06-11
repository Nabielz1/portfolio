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
    <section id="hero" className="flex items-center justify-between min-h-screen py-20 px-4 bg-white">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-semibold mb-4">
          RIFQI NABIL AKBAR <span className="text-black">PORTFOLIO</span>
        </h1>
        <p className="text-xl mb-6">{text}</p>
        <p className="text-gray-600 mb-4">
          Welcome to my professional portfolio. My name is Rifqi Nabil Akbar...
        </p>
        <div className="flex space-x-4">
          <a href="#contact" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-900">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-2 border-2 border-black text-black rounded hover:bg-gray-100">
            My Portfolio
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
