import React, { useState, useEffect } from "react";
import "../styles/projects.css";
import projectsData from "../locales/ProjectsData";
import SkeletonLoader from "../utils/skeletonLoader";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__heading">Projects</h2>

        <div className="projects__grid">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="project-card">
                  <SkeletonLoader type="image" />
                  <div className="project-card__content">
                    <SkeletonLoader type="title" />
                    <SkeletonLoader type="text" />
                    <SkeletonLoader type="text" />
                    <SkeletonLoader type="button" />
                  </div>
                </div>
              ))
            : projectsData.map((project) => (
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
                            <i className="fa-solid fa-desktop"></i>
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
                            <i className="fa-brands fa-github"></i>
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
