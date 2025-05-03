import React from "react";
import "../styles/projects.css";
import fweatherImg from "../assets/project-imgs/Fweather.png";
import omdbImg from "../assets/project-imgs/OMDB.png";
import treactImg from "../assets/project-imgs/treact.png";

const projectsData = [
  {
    id: 1,
    title: "OMDB Movie Store",
    description:
      "A React app that lets users search movies via the OMDB API, view top-rated picks, and explore recent releases with styled components and responsive UI.",
    image: omdbImg,
    tags: ["React", "Firebase", "Responsive UI", "API Integration"],
    liveLink: "https://mike-innella.github.io/OMDBProject/",
    codeLink: "https://github.com/Mike-Innella/OMDBProject",
  },
  {
    id: 2,
    title: "Fweather",
    description:
      "A sleek React weather app with real-time search, location-based forecasts, and dynamic UI animations.",
    image: fweatherImg,
    tags: ["React", "Node.js", "API Integration"],
    liveLink: "https://mike-innella.github.io/Fweather/",
    codeLink: "https://github.com/Mike-Innella/Fweather",
  },
  {
    id: 3,
    title: "Treact",
    description:
      "A responsive recreation of the Treact landing page template using HTML, CSS, and JavaScript.",
    image: treactImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://mike-innella.github.io/Treact-Project/",
    codeLink: "https://github.com/Mike-Innella/Treact-Project",
  },
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
                <div className="project-card__overlay">
                  <p className="project-card__description">
                    {project.description}
                  </p>
                  <div className="project-card__tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a
                      href={project.liveLink}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="project-card__link-icon">
                        <i class="fa-solid fa-desktop"></i>
                      </span>{" "}
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="project-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="project-card__link-icon">
                        <i class="fa-brands fa-github"></i>
                      </span>{" "}
                      View Code
                    </a>
                  </div>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
