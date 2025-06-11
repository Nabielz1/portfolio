import React, { useState } from 'react';
import '../App.css'; // Import Tailwind CSS

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50 py-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          <img src="/assets/portofolio-logo.png" alt="Logo" className="h-10" />
          <h2 className="text-xl font-bold">RIFQI  <span className="text-gray-700">PORTFOLIO</span></h2>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-8 font-medium">
            <li><a href="#hero" className="text-gray-700 hover:text-black">HOME</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-black">ABOUT</a></li>
            <li><a href="#resume" className="text-gray-700 hover:text-black">RESUME</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-black">SKILLS</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-black">PORTFOLIO</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-black">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
