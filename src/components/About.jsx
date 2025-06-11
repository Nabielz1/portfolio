import "../App.css"; // Import Tailwind CSS styles

function About() {
  return (
    <section id="about" className="py-20 px-48 bg-white">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 max-w-fit">About Me</h2>
      <p className="mx-auto text-lg text-gray-700 text-justify">
        I am an enthusiastic, well-organized, and deeply inquisitive third-year
        Computer Science student with a strong passion for problem-solving, technology,
        and innovation. Skilled in adapting to new environments, collaborating in teams,
        and communicating technical ideas effectively. Eager to deepen knowledge and gain
        practical experience in areas such as software development, data analysis, artificial
        intelligence, and system design through real-world challenges and interdisciplinary
        projects.
      </p>
    </section>
  );
}

export default About;
