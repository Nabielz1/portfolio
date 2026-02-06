import { useTranslation } from 'react-i18next';
import "../App.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 text-white py-6 text-center">
      <div className="space-x-6">
        <a href="https://github.com/Nabielz1" target="_blank" rel="noopener noreferrer" className="text-white text-lg"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rifqi-nabil-akbar/" target="_blank" rel="noopener noreferrer" className="text-white text-lg"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/ripkii_n/" target="_blank" rel="noopener noreferrer" className="text-white text-lg"><i className="fab fa-instagram"></i></a>
      </div>
      <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('footer_text') }}></p>
    </footer>
  );
}

export default Footer;