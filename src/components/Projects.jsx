import "../App.css"; // Import Tailwind CSS styles

function Projects() {
  const projects = [
    {
      title: "Kontan News Scraper",
      description: "This project is a news scraper for the Kontan website, focusing on the topic of Trump tariffs.",
      image: "/assets/kontan.png",
      tech: ["Python", "BeautifulSoup", "Computational Journalism"],
      github: "https://github.com/danielmahardhika/kontan-news-scraper"
    },
    {
      title: "Tweet Harvest Tokenizing Filtering Stemming",
      description: "This project aims to collect, process, and analyze tweet data from Twitter using techniques for tokenization, filtering, and stemming.",
      image: "/assets/tweetharvest.png",
      tech: ["Python", "Natural Language Processing"],
      github: "https://github.com/danielmahardhika/tweet-harvest-tokenizing-filtering-stemming"
    },
    {
      title: "Optimized TSP with ACO",
      description: "This project explains the implementation of the Ant Colony Optimization (ACO) algorithm to solve the Traveling Salesman Problem (TSP).",
      image: "/assets/tsp.png",
      tech: ["Python", "TSP", "Optimization Techniques"],
      github: "https://github.com/danielmahardhika/tsp-aco"
    },
  ];

  return (
    <section id="projects" className="py-20 px-48 bg-white">
      <h2 className="text-3xl font-semibold mb-6 border-b-4 max-w-fit">Portfolio</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-900 py-1 px-3 rounded-full text-xs">{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 rounded-sm px-4 py-2 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
