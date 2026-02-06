import { useTranslation } from 'react-i18next';
import "../App.css";

function Projects() {
  const { t } = useTranslation();
  
  const projectsData = [
    { 
      key: 'jobseeker_app', 
      image: "/assets/Mockup-Gigsy.png", 
      tech: ["Figma", "UI/UX Design"], 
      figma: "https://www.figma.com/proto/LXgjKiVnDbWYRkfFiNZ3tz/GIGSY?node-id=27-3132&p=f&t=vyArEkvt6aYTU6Ie-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=27%3A3109" 
    },
    { 
      key: 'mindfulness_app', 
      image: "/assets/Mockup-improve.png", 
      tech: ["Figma", "UI/UX Design"], 
      figma: "https://www.figma.com/proto/uhcJAZFMkiUKxKehondm7B/ISFEST-2024?node-id=10-41&p=f&t=MdK7ersZ6OmhsI5Z-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A448" 
    },
    { 
      key: 'waste_app', 
      image: "/assets/Mockup-ecowaste.png", 
      tech: ["Figma", "UI/UX Design"], 
      figma: "https://www.figma.com/proto/Iee8qof2qRtFTlm9Vfw3KJ/ECOWASTE?node-id=573-775&p=f&t=n8rRspXwpZD2zCy0-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A176" 
    },
    { 
      key: 'bike_analysis', 
      image: "/assets/bike-sharing-analysis.png", 
      tech: ["Python", "Pandas", "Seaborn", "Streamlit"], 
      github: "https://github.com/Nabielz1/Bike_Sharing_Analysis", 
      streamlit: "https://bikesharinganalysis-rifqinabil.streamlit.app/" 
    },
    { 
      key: 'triv_analysis', 
      image: "/assets/triv-sentiment-analysis.png", 
      tech: ["Python", "Pandas", "NLTK", "Scikit-learn", "Streamlit"], 
      github: "https://github.com/Nabielz1/triv-sentiment-analysis", 
      streamlit: "https://nabielz1-triv-sentiment-analysis-app-jqpl5t.streamlit.app/" 
    },
  ];

  return (
    <section id="projects" className="bg-white px-6 py-16 sm:px-12 lg:px-24 lg:py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">{t('portfolio_title')}</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div key={project.key} className="flex transform flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <img src={project.image} alt={t(`${project.key}_title`)} className="h-52 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold">{t(`${project.key}_title`)}</h3>
                <p className="flex-1 text-justify text-sm text-gray-600">{t(`${project.key}_desc`)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800">{tech}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 pt-4">
                  {project.figma && <a href={project.figma} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-950">Figma</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-950">GitHub</a>}
                  {project.streamlit && <a href={project.streamlit} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-950">Streamlit</a>}
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