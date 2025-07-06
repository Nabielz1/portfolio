import "../App.css"; // Import Tailwind CSS styles

function Projects() {
  const projects = [
    {
      title: "Jobseeker Mobile App",
      description: "This project showcases the Gigsy Jobseeker Mobile App, developed for the UI/UX competition at INSPACE ITK 2024 and it successfully became a finalist in the competition. The app is designed to help jobseekers find the right opportunities.",
      image: "/assets/Mockup-Gigsy.png",
      tech: ["Figma", "UI/UX Design"],
      figma: "https://www.figma.com/proto/LXgjKiVnDbWYRkfFiNZ3tz/GIGSY?node-id=27-3132&p=f&t=vyArEkvt6aYTU6Ie-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=27%3A3109"
    },
    {
      title: "Mindfulness Mobile App",
      description: "This project showcases the Improve It Mindfulness Mobile App, developed for the ISFEST UKSW 2024 competition. The app focuses on mindfulness and well-being, offering features like mood tracking, sleep quality monitoring, and meditation sessions.",
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
    {
      title: "Bike Sharing Analysis",
      description: "Developed an interactive dashboard to translate raw bike rent data into actionable business insights. Through exploratory data analysis, this project visualizes the impact of weather, seasonality, and time of day on rental demand, providing a clear view of user behavior and operational patterns.",
      image: "/src/assets/bike-sharing-analysis.png",
      tech: ["Python", "Pandas", "Seaborn", "Streamlit"],
      github: "https://github.com/Nabielz1/Bike_Sharing_Analysis",
      streamlit: "https://bikesharinganalysis-rifqinabil.streamlit.app/"
    },
  ];

  return (
    // responsive section for projects
    <section
      id="projects"
      className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="container mx-auto">
        {/* Title for the Projects section */}
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            Portfolio
          </span>
        </h2>
        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="flex transform flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="flex-1 text-justify text-sm text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800">{tech}</span>
                  ))}
                </div>
                {/* Container for project links/buttons */}
                <div className="mt-6 flex flex-wrap gap-3 pt-4">
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-950"
                    >
                      Figma
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-950"
                    >
                      GitHub
                    </a>
                  )}
                  {project.streamlit && (
                    <a
                      href={project.streamlit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-950"
                    >
                      Streamlit
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;