import "../App.css"; // Import Tailwind CSS styles

function Resume() {
  return (
    // responsive section for resume
    <section 
      id="resume" 
      className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      {/* Section Title */}
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            Resume
          </span>
        </h2>

        {/* Grid layout for resume sections */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          
          {/* Resume Section 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Educations</h3>
            <div className="relative border-l-2 border-gray-300 pl-6">
              {/* Education details */}
              <div className="mb-8 flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">
                  2022 - 2026 (Expected)
                </p>
                <h4 className="py-2 text-lg font-bold text-gray-900">
                  Undergraduate in Information Systems
                </h4>
                <p className="text-base text-gray-600">
                  Satya Wacana Christian University
                </p>
                <p className="text-sm text-gray-500">Current GPA: 3.87 / 4.00</p>
              </div>
              
              {/* Education details */}
              <div className="flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">
                  2019 - 2022
                </p>
                <h4 className="py-2 text-lg font-bold text-gray-900">
                  Mathematics and Natural Sciences
                </h4>
                <p className="text-base text-gray-600">SMA Negeri 3 Salatiga</p>
              </div>
            </div>
          </div>

          {/* Resume Section 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Experiences</h3>
            <div className="relative border-l-2 border-gray-300 pl-6">
              {/* Experience details */}
              <div className="flex flex-col">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gray-800"></div>
                <p className="text-sm font-semibold text-gray-700">
                  March 2025 - July 2025
                </p>
                <h4 className="py-2 text-lg font-bold text-gray-900">
                  Web Developer Intern
                </h4>
                <p className="text-base text-gray-600">
                  Dr. Oen Solo Baru Hospital
                </p>
                <ul className="ml-5 list-disc space-y-1 pt-2 text-base text-gray-600 text-justify">
                  <li>
                    Worked as a Full-Stack Web Developer on two internal systems, a web-based E-Logbook for nurse activitytracking and an E-Learning platform for hospital-wide training management.
                  </li>
                  <li>
                    Developed the E-Logbook using Laravel 11, Tailwind CSS, and PostgreSQL with features including clinical task logging, scoring logic, user authentication, and Excel-based reporting.
                  </li>
                  <li>
                    Delivered  a  fully  functional  prototype  of  the  E-Logbook,  which  is  currently  being  tested  in  the  nursing department to improve accuracy and supervisor monitoring.
                  </li>
                  <li>
                    Designed  and  built  the  E-Learning  frontend  using  React,  TypeScript,  Tailwind  CSS,  and  PostgreSQL,featuring pre/post-tests, automated certificates, and role-based access control.
                  </li>
                  <li>
                    Contributed  to  backend  setup  using  NestJS  with  a  focus  on  secure  API  structure,  modular  databaseschema, and role-based content accessibility.
                  </li>
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