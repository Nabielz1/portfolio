import "../App.css"; // Import Tailwind CSS styles

function About() {
  return (
    // responsive section for about
    <section 
      id="about" 
      className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            About
          </span>
        </h2>
        {/* Deskripsi tentang diri Anda */}
        <p className="text-base text-gray-700 text-justify md:text-lg">
          I am an enthusiastic, well-organized, and deeply inquisitive third-year Information Systems student at Satya Wacana Christian University, with a strong passion for technology, software development, system design, business analysis, and data analysis. Skilled in adapting to new environments, collaborating in teams, and communicating technical ideas effectively, I am passionate about bridging technology and business. My hands-on experience in designing intuitive systems, analyzing data, and collaborating with teams to drive impactful solutions fuels my desire to create innovative and effective solutions that add real value. Eager to deepen my knowledge and gain practical experience in areas such as software development, data analysis, and system design, I am committed to excellence and continuous learning. My journey is just beginning, and I look forward to exploring new opportunities that challenge my skills and expand my knowledge.
        </p>
      </div>
    </section>
  );
}

export default About;