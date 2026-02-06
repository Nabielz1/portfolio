import { useTranslation } from 'react-i18next';
import "../App.css";

function About() {
  const { t } = useTranslation();

  return (
    <section 
      id="about" 
      className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            {t('about_title')}
          </span>
        </h2>
        <p className="text-base text-gray-700 text-justify md:text-lg">
          {t('about_text')}
        </p>
      </div>
    </section>
  );
}

export default About;