import React, { useState } from 'react';
import '../App.css'; // Pastikan file CSS Anda diimpor

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Modifikasi fungsi handleLinkClick untuk menangani smooth scroll
  const handleLinkClick = (e, link) => {
    // 1. Mencegah perilaku default tautan untuk melompat langsung
    e.preventDefault();

    // 2. Tetap perbarui state untuk tautan aktif
    setActiveLink(link);

    // 3. Dapatkan ID target dari atribut href
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // 4. Lakukan smooth scroll jika elemen target ditemukan
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      // Kurangi dengan tinggi navbar Anda (misalnya, 80px)
      const headerOffset = 80; 

      window.scrollTo({
        top: offsetTop - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed w-full top-0 backdrop-blur-sm bg-[rgba(255,255,255,0.5)] shadow-md z-50 py-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold">RIFQI <span className="text-gray-700">PORTFOLIO</span></h2>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-8 font-medium">
            {/* Perbarui setiap onClick untuk meneruskan event (e) */}
            <li>
              <a
                href="#hero"
                className={`relative hover:text-black ${activeLink === 'home' ? 'text-black' : 'text-gray-700'}`}
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                HOME
                {activeLink === 'home' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`relative hover:text-black ${activeLink === 'about' ? 'text-black' : 'text-gray-700'}`}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                ABOUT
                {activeLink === 'about' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={`relative hover:text-black ${activeLink === 'resume' ? 'text-black' : 'text-gray-700'}`}
                onClick={(e) => handleLinkClick(e, 'resume')}
              >
                RESUME
                {activeLink === 'resume' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`relative hover:text-black ${activeLink === 'skills' ? 'text-black' : 'text-gray-700'}`}
                onClick={(e) => handleLinkClick(e, 'skills')}
              >
                SKILLS
                {activeLink === 'skills' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`relative hover:text-black ${activeLink === 'projects' ? 'text-black' : 'text-gray-700'}`}
                onClick={(e) => handleLinkClick(e, 'projects')}
              >
                PORTFOLIO
                {activeLink === 'projects' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`relative hover:text-black ${activeLink === 'contact' ? 'text-black' : 'text-gray-700'}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                CONTACT
                {activeLink === 'contact' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;