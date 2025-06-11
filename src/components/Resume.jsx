import "../App.css"; // Import Tailwind CSS styles

function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Resume</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Education</h3>
          <p>2022 - Present | Undergraduate in Computer Science | Satya Wacana Christian University</p>
          <p className="text-gray-600">Current GPA: 3.98/4.00</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Experience</h3>
          <p>Aug 2023 - Present | Assistant Lecturer | Satya Wacana Christian University</p>
          <ul className="list-disc ml-6">
            <li>Assisted in teaching Operating System Basics to Informatics Engineering students</li>
            <li>Taught Network Programming Basics and Database System</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
