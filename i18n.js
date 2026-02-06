import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './src/locales/en.json';
import idTranslation from './src/locales/id.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false, 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: enTranslation
      },
      id: {
        translation: idTranslation
      }
    }
  });

export default i18n;