import "../App.css"; // Import Tailwind CSS styles

function Projects() {
  const projects = [
    {
      title: "Jobseeker Mobile App",
      description: "This project showcases the Gigsy Jobseeker Mobile App, developed for the UI/UX competition at INSPACE ITK 2024 and it successfully became a finalist in the competition. The app is designed to help jobseekers find the right opportunities.",
      image: "/assets/Mockup-Gigsy.png",
      tech: ["Figma", "UI/UX Design"],
      // --- KUNCI DIUBAH DI SINI ---
      figma: "https://www.figma.com/proto/LXgjKiVnDbWYRkfFiNZ3tz/GIGSY?node-id=27-3132&p=f&t=vyArEkvt6aYTU6Ie-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=27%3A3109"
    },
    {
      title: "Mindfulness Mobile App",
      description: "This project showcases the Improve It Mindfulness Mobile App, developed for the ISFEST UKSW 2024 competition. The app focuses on mindfulness and well-being, offering features like mood tracking, sleep quality monitoring, and meditation sessions. ",
      image: "/assets/Mockup-improve.png",
      tech: ["Figma", "UI/UX Design"],
      figma: "https://www.figma.com/proto/uhcJAZFMkiUKxKehondm7B/ISFEST-2024?node-id=10-41&p=f&t=MdK7ersZ6OmhsI5Z-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A448"
    },
    {
      title: "Waste Disposal Mobile App",
      description: "This project showcases the EcoWaste Mobile App, developed for the iWeek UI/UX competition. The app is designed to streamline waste collection and disposal, providing users with easy access to pickup services, waste categorization, and nearby disposal sites.",
      image: "/assets/Mockup-ecowaste.png",
      tech: ["Figma", "UI/UX Design"],
      figma: "https://www.figma.com/proto/Iee8qof2qRtFTlm9Vfw3KJ/ECOWASTE?node-id=573-775&p=f&t=n8rRspXwpZD2zCy0-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A176"
    },
  ];

  return (
    <section id="projects" className="py-20 px-48 bg-white">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 max-w-fit">Portfolio</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm flex-1 text-justify">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-900 py-1 px-3 rounded-full text-xs mb-6">{tech}</span>
                ))}
              </div>
              <div className="mt-4">
                 {/* --- LOGIKA JSX DISESUAIKAN DI SINI --- */}
                <a 
                  href={project.figma || project.github} // Gunakan link figma jika ada, jika tidak, gunakan link github
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white bg-gray-800 rounded-sm px-4 py-2 hover:underline absolute bottom-4 right-4 mt-4"
                >
                  {project.figma ? 'Figma' : 'GitHub'} {/* Tampilkan teks berdasarkan kunci yang ada */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;