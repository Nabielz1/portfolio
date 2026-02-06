import { useTranslation } from 'react-i18next';
import Marquee from "react-fast-marquee";
import "../App.css";

function Skills() {
  const { t } = useTranslation();
  const skillsData = [ 
    'After Effect', 
    'Canva', 
    'CSS', 
    'Figma', 
    'Javascript', 
    'MongoDB', 
    'MySQL', 
    'PHP', 
    'PostgreSQL', 
    'Python', 
    'React Js', 
    'Tailwind CSS' 
  ];
  const skillsImage = (skill) => ({
    'After Effect': { src: '/assets/after-effects.svg' }, 
    'Canva': { src: '/assets/canva.svg' }, 
    'CSS': { src: '/assets/css.svg' }, 
    'Figma': { src: '/assets/figma.svg' }, 
    'Javascript': { src: '/assets/javascript.svg' }, 
    'MongoDB': { src: '/assets/mongoDB.svg' }, 
    'MySQL': { src: '/assets/mysql.svg' }, 
    'PHP': { src: '/assets/php.svg' }, 
    'PostgreSQL': { src: '/assets/postgresql.svg' }, 
    'Python': { src: '/assets/python.svg' }, 
    'React Js': { src: '/assets/react.svg' }, 
    'Tailwind CSS': { src: '/assets/tailwind.svg' },
  }[skill]);

  return (
    <section id="skills" className="py-32 px-4 md:px-16 lg:px-24 bg-white relative">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            {t('skills_title')}
          </span>
        </h2>
        <div className="w-full mt-8">
          <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
            {skillsData.map((skill, id) => {
              const skillImg = skillsImage(skill);
              return (
                skillImg && (
                  <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={id}>
                    <div className="h-full w-full rounded-lg bg-gradient-to-b from-gray-700 via-gray-500 to-gray-700 shadow-none shadow-gray-50 group-hover:border-gray-500 transition-all duration-500">
                      <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                          <img src={skillImg.src} alt={skill} width={40} height={40} className="h-full w-auto rounded-lg" />
                        </div>
                        <p className="text-white text-sm sm:text-lg">{skill}</p>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;