import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import LanguageSwitcher from './LanguageSwitcher'; 
import '../App.css'; 

function Navbar() {
  const { t } = useTranslation(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const [isClickScrolling, setIsClickScrolling] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    
    setIsClickScrolling(true);
    
    setActiveLink(link); 

    if (menuOpen) {
      setMenuOpen(false);
    }

    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerComponent = document.querySelector('header');
      const headerOffset = headerComponent ? headerComponent.offsetHeight : 80;
      
      window.scrollTo({
        top: targetElement.offsetTop - headerOffset,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setIsClickScrolling(false);
      }, 800);
    } else {
        setIsClickScrolling(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      if (isClickScrolling) {
        return; 
      }

      let currentSectionId = '';
      const headerComponent = document.querySelector('header');
      const headerOffset = headerComponent ? headerComponent.offsetHeight : 80;
      const triggerPoint = headerOffset + 70;

      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - triggerPoint) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId && currentSectionId !== activeLink) {
        setActiveLink(currentSectionId);
      }
      
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink, isClickScrolling]); 

  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(255,255,255,0.5)] backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} className="text-xl font-bold">
          RIFQI <span className="text-gray-700">PORTFOLIO</span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 font-medium">
              <li><a href="#hero" className={`relative hover:text-black ${activeLink === 'hero' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'hero')}>{t('nav_home')}{activeLink === 'hero' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}</a></li>
              <li><a href="#about" className={`relative hover:text-black ${activeLink === 'about' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'about')}>{t('nav_about')}{activeLink === 'about' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}</a></li>
              <li><a href="#resume" className={`relative hover:text-black ${activeLink === 'resume' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'resume')}>{t('nav_resume')}{activeLink === 'resume' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}</a></li>
              <li><a href="#skills" className={`relative hover:text-black ${activeLink === 'skills' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'skills')}>{t('nav_skills')}{activeLink === 'skills' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}</a></li>
              <li><a href="#projects" className={`relative hover:text-black ${activeLink === 'projects' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'projects')}>{t('nav_portfolio')}{activeLink === 'projects' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}</a></li>
              <li><a href="#contact" className={`relative hover:text-black ${activeLink === 'contact' ? 'text-black' : 'text-gray-700'}`} onClick={(e) => handleLinkClick(e, 'contact')}>{t('nav_contact')}{activeLink === 'contact' && <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-black"></span>}</a></li>
            </ul>
          </nav>
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <button className="z-50 text-2xl lg:hidden" onClick={toggleMenu}>
            <i className={`transition-transform duration-300 ease-in-out ${menuOpen ? 'fas fa-times rotate-90' : 'fas fa-bars'}`}></i>
          </button>
        </div>
      </div>
      <nav className={`overflow-hidden backdrop-blur-sm bg-[rgba(255,255,255,0.2)] shadow-md transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
          <li><a href="#hero" className={`relative pb-2 hover:text-slate-900 ${activeLink === 'hero' ? 'text-slate-900 font-bold' : 'text-slate-600'}`} onClick={(e) => handleLinkClick(e, 'hero')}>{t('nav_home')}{activeLink === 'hero' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800"></span>}</a></li>
          <li><a href="#about" className={`relative pb-2 hover:text-slate-900 ${activeLink === 'about' ? 'text-slate-900 font-bold' : 'text-slate-600'}`} onClick={(e) => handleLinkClick(e, 'about')}>{t('nav_about')}{activeLink === 'about' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800"></span>}</a></li>
          <li><a href="#resume" className={`relative pb-2 hover:text-slate-900 ${activeLink === 'resume' ? 'text-slate-900 font-bold' : 'text-slate-600'}`} onClick={(e) => handleLinkClick(e, 'resume')}>{t('nav_resume')}{activeLink === 'resume' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800"></span>}</a></li>
          <li><a href="#skills" className={`relative pb-2 hover:text-slate-900 ${activeLink === 'skills' ? 'text-slate-900 font-bold' : 'text-slate-600'}`} onClick={(e) => handleLinkClick(e, 'skills')}>{t('nav_skills')}{activeLink === 'skills' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800"></span>}</a></li>
          <li><a href="#projects" className={`relative pb-2 hover:text-slate-900 ${activeLink === 'projects' ? 'text-slate-900 font-bold' : 'text-slate-600'}`} onClick={(e) => handleLinkClick(e, 'projects')}>{t('nav_portfolio')}{activeLink === 'projects' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800"></span>}</a></li>
          <li><a href="#contact" className={`relative pb-2 hover:text-slate-900 ${activeLink === 'contact' ? 'text-slate-900 font-bold' : 'text-slate-600'}`} onClick={(e) => handleLinkClick(e, 'contact')}>{t('nav_contact')}{activeLink === 'contact' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800"></span>}</a></li>
          <li className="pt-2"><LanguageSwitcher /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;