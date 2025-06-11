import "../App.css"; // Import Tailwind CSS styles

function Resume() {
  return (
    <section id="resume" className="py-20 px-48 bg-white">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 pb-2 max-w-fit">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Education</h3>
          <div className="relative pl-6">
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gray-500 rounded-lg"></div> {/* Garis lebih kecil */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <p className="text-gray-800 font-semibold">
                  2022 - 2026 (Expected)
                </p>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Undergraduate in Information System
              </h4>
              <p className="text-gray-600">Satya Wacana Christian University</p>
              <p className="text-gray-600">6th semester student</p>
              <p className="text-gray-600">Current GPA: 3.87/4.00</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
          <div className="relative pl-6">
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gray-500 rounded-lg"></div> {/* Garis lebih kecil */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <p className="text-gray-800 font-semibold">
                  Aug 2023 - Present
                </p>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Assistant Lecturer
              </h4>
              <p className="text-gray-600">Satya Wacana Christian University</p>
              <p className="text-gray-600">
                Taught the students of Informatics Engineering at Faculty of
                Technology and Information UKSW to solve problems and reported
                the results to the lecturer for each semester.
              </p>

              <ul className="list-disc ml-6 text-gray-600">
                <li>Assistant Lecturer Of Operating System (Mar 2025 - Present)</li>
                <li>Assistant Lecturer Of Network Programming Basics (Aug 2024 - Dec 2024)</li>
                <li>Assistant Lecturer Of Computer Network (Mar 2024 - Jul 2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
