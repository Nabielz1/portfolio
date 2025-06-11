import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white text-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">PORTFOLIO</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Repeat for each project */}
        <div className="project-card p-6 bg-gray-100 rounded-lg shadow-md">
          <img src="/assets/kontan.png" alt="kontan" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold mt-4">Kontan News Scraper</h3>
          <p className="text-gray-600 mt-2">This project is a news scraper for the Kontan website...</p>
          <a href="https://github.com/danielmahardhika/kontan-news-scraper" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
