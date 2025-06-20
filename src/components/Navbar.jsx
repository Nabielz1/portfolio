import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import '../App.css'; // Pastikan file CSS Anda diimpor

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const headerOffset = 80;
      window.scrollTo({
        top: offsetTop - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  // --- LOGIKA BARU DIMULAI DI SINI ---

  // Di dalam file Navbar.jsx

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let currentSectionId = '';
      
      // Tentukan titik pemicu di viewport (misalnya, 150px dari atas)
      const triggerPoint = 150; 

      sections.forEach(section => {
        // Cek apakah bagian atas section sudah melewati titik pemicu
        if (window.scrollY >= section.offsetTop - triggerPoint) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Update state HANYA jika ID section berubah
      if (currentSectionId && currentSectionId !== activeLink) {
        setActiveLink(currentSectionId);
      }
      
      // Logika untuk animasi reveal tetap sama
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const revealPoint = 150;

          if (elementTop < windowHeight - revealPoint) {
              element.classList.add('active');
          }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]); // Dependency array tetap

  // --- LOGIKA BARU BERAKHIR DI SINI ---

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
            {/* Tautan navigasi tidak perlu diubah, karena sudah reaktif terhadap state `activeLink` */}
            <li>
              <a href="#hero" className={`relative hover:text-black ${activeLink === 'hero' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'hero')}>
                HOME
                {activeLink === 'hero' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a href="#about" className={`relative hover:text-black ${activeLink === 'about' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'about')}>
                ABOUT
                {activeLink === 'about' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a href="#resume" className={`relative hover:text-black ${activeLink === 'resume' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'resume')}>
                RESUME
                {activeLink === 'resume' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a href="#skills" className={`relative hover:text-black ${activeLink === 'skills' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'skills')}>
                SKILLS
                {activeLink === 'skills' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a href="#projects" className={`relative hover:text-black ${activeLink === 'projects' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'projects')}>
                PORTFOLIO
                {activeLink === 'projects' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}
              </a>
            </li>
            <li>
              <a href="#contact" className={`relative hover:text-black ${activeLink === 'contact' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'contact')}>
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