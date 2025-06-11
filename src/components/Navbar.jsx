import React from "react";
import './App.css'

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md backdrop-blur-lg z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">PORTFOLIO</h2>
        <button className="mobile-menu-btn block md:hidden">
          <i className="fas fa-bars"></i>
        </button>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-900">HOME</a>
          <a href="#about" className="hover:text-gray-900">ABOUT</a>
          <a href="#resume" className="hover:text-gray-900">RESUME</a>
          <a href="#skills" className="hover:text-gray-900">SKILLS</a>
          <a href="#projects" className="hover:text-gray-900">PORTFOLIO</a>
          <a href="#contact" className="hover:text-gray-900">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;