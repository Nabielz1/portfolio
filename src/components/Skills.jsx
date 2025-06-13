import "../App.css"; // Import Tailwind CSS styles
import Marquee from "react-fast-marquee";

function Skills() {
  const skillsData = [
    'Adobe After Effect',
    'Canva',
    'CSS',
    'Figma',
    'Javascript',
    'Microsoft Office',
    'MongoDB',
    'MySQL',
    'PHP',
    'PostgreSQL',
    'Python',
    'React',
  ];

  const skillsImage = (skill) => {
    const skillassets = {
      'Adobe After Effect': { src: '/assets/after-effects.svg' },
      'Canva': { src: '/assets/canva.svg' },
      'CSS': { src: '/assets/css.svg' },
      'Figma': { src: '/assets/figma.svg' },
      'Javascript': { src: '/assets/javascript.svg' },
      'Microsoft Office': { src: '/assets/microsoftoffice.svg' },
      'MongoDB': { src: '/assets/mongoDB.svg' },
      'MySQL': { src: '/assets/mysql.svg' },
      'PHP': { src: '/assets/php.svg' },
      'PostgreSQL': { src: '/assets/postgresql.svg' },
      'Python': { src: '/assets/python.svg' },
      'React': { src: '/assets/react.svg' },
    };

    return skillassets[skill];
  };

  return (
    <div id="skills" className="py-20 px-48">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20">
      </div>
          <h2 className="text-3xl font-semibold mb-6 border-b-4 pb-2 max-w-fit">Skills</h2>
          
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const skillImg = skillsImage(skill);
            return (
              skillImg && (
                <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={id}>
                  <div className="h-full w-full rounded-lg bg-gradient-to-b from-gray-700 via-gray-500 to-gray-700 shadow-none shadow-gray-50 group-hover:border-gray-500 transition-all duration-500">
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <img
                          src={skillImg.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
