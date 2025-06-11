import "../App.css"; // Import Tailwind CSS styles

function Skills() {
  const hardSkills = [
    { skill: "Machine Learning", progress: 90 },
    { skill: "Python", progress: 95 },
    { skill: "SQL", progress: 90 },
    { skill: "Object Oriented Programming", progress: 95 },
    { skill: "Microsoft Office", progress: 100 },
  ];

  const softSkills = [
    { skill: "Communication", progress: 100 },
    { skill: "Teamwork", progress: 100 },
    { skill: "Leadership", progress: 100 },
    { skill: "Adaptive", progress: 100 },
    { skill: "Problem Solver", progress: 100 },
  ];

  return (
    <section id="skills" className="py-20 px-48 bg-white">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 max-w-fit">Skills</h2>
      <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold mb-4">Hard Skills</h3>
          <ul>
            {hardSkills.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between">
                  <span>{item.skill}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-gray-800 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <ul>
            {softSkills.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between">
                  <span>{item.skill}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-gray-800 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
