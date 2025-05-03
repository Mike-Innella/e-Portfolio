import React from "react";
import "../styles/projects.css";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
    image: "https://via.placeholder.com/350x200?text=E-Commerce+Project",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image: "https://via.placeholder.com/350x200?text=Task+Management+App",
    tags: ["React", "Firebase", "Material UI"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information dashboard with location search and 5-day forecast visualization.",
    image: "https://via.placeholder.com/350x200?text=Weather+Dashboard",
    tags: ["JavaScript", "API Integration", "Chart.js"],
    liveLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__heading">Projects</h2>
        <div className="projects__grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-card__image" 
              />
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a href={project.liveLink} className="project-card__link" target="_blank" rel="noopener noreferrer">
                    <span className="project-card__link-icon">🔗</span> Live Demo
                  </a>
                  <a href={project.codeLink} className="project-card__link" target="_blank" rel="noopener noreferrer">
                    <span className="project-card__link-icon">💻</span> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
