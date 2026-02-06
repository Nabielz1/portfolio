import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith('en');

  const handleLanguageChange = () => {
    const newLang = isEnglish ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <label htmlFor="language-toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="language-toggle"
          type="checkbox"
          className="sr-only"
          checked={!isEnglish}
          onChange={handleLanguageChange}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div className="absolute left-1 top-1 w-12 h-6 flex items-center justify-between text-white font-bold text-xs px-1">
          <span>EN</span>
          <span>ID</span>
        </div>
        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform"></div>
      </div>
    </label>
  );
};

export default LanguageSwitcher;