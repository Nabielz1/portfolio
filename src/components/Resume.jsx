import { useTranslation } from 'react-i18next';
import "../App.css";

function Resume() {
  const { t } = useTranslation();

  return (
    <section id="resume" className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            {t('resume_title')}
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">{t('resume_education_title')}</h3>
            <div className="relative border-l-2 border-gray-300 pl-6">
              <div className="mb-8 flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">2022 - 2026 (Expected)</p>
                <h4 className="py-2 text-lg font-bold text-gray-900">{t('undergraduate_degree')}</h4>
                <p className="text-base text-gray-600">Satya Wacana Christian University</p>
                <p className="text-sm text-gray-500">Current GPA: 3.87 / 4.00</p>
              </div>
              <div className="flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">2019 - 2022</p>
                <h4 className="py-2 text-lg font-bold text-gray-900">{t('high_school_major')}</h4>
                <p className="text-base text-gray-600">SMA Negeri 3 Salatiga</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">{t('resume_experience_title')}</h3>
            <div className="relative border-l-2 border-gray-300 pl-6">
              <div className="flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">March 2025 - July 2025</p>
                <h4 className="py-2 text-lg font-bold text-gray-900">{t('web_dev_intern')}</h4>
                <p className="text-base text-gray-600">Dr. Oen Solo Baru Hospital</p>
                <ul className="ml-5 list-disc space-y-1 pt-2 text-base text-gray-600 text-justify">
                  <li>{t('intern_desc_1')}</li>
                  <li>{t('intern_desc_2')}</li>
                  <li>{t('intern_desc_3')}</li>
                  <li>{t('intern_desc_4')}</li>
                  <li>{t('intern_desc_5')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;