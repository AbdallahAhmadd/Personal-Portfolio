import './projectcard.css'
import {useState} from "react";
import SkillsData from "../assets/Skills.json";

function ProjectsCard({projects}){
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    // Fill empty spaces if needed
    const displayProjects = [...currentProjects];
    while (displayProjects.length < projectsPerPage) {
        displayProjects.push({ empty: true });
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    function ViewClick(url){
        window.open(url);
    }
    function CodeClick(url){
        window.open(url);
    }

    return(
        <div id="projects-grid-container">
            <div className="projects-grid">
                {displayProjects.map((project, index) => (
                    project.empty ? (
                        <div key={`empty-${index}`} className="project-card empty">
                            <span>Coming Soon</span>
                        </div>
                    ) : (
                        <div key={index} className="project-card">
                            <div className="project-image-container">
                                <img className="project-image" src={project.image} alt={project.title}/>
                                <div className="overlay">
                                    <div className="project-buttons-container">
                                        {project.hasView !== false && (
                                            <button onClick={() => ViewClick(project.viewUrl)}>
                                                View <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                            </button>
                                        )}
                                        <button onClick={() => CodeClick(project.codeUrl)}>
                                            Code <i className="fa-brands fa-github"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h2>{project.title}</h2>
                                <p>{project.subtitle}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div className="pagination-controls">
                <button 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1}
                    className="pagination-button"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <span className="page-indicator">
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages}
                    className="pagination-button"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default ProjectsCard;