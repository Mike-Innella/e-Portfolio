import React, { useState, useEffect, useRef } from "react";
import "../styles/components/projects.css";
import "../styles/slider.css";
import projectsData from "../locales/ProjectsData";
import ProjectCardSkeleton from "../UI/Skeleton Loaders/ProjectsSkeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../UI/Slider Interface/sliderArrows";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null); // ✅ create the ref

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 480,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "4px",
    CSS: "ease",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2800,
    rtl: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <section id="projects" className="projects" aria-busy={isLoading}>
      <div className="projects__container">
        <h2 className="projects__heading">Projects</h2>
        <>
          <div className="slider--container">
            <Slider {...settings} ref={sliderRef}>
              {(isLoading ? Array.from({ length: 3 }) : projectsData).map(
                (project, index) => (
                  <div key={project?.id || index}>
                    {isLoading ? (
                      <ProjectCardSkeleton />
                    ) : (
                      <div className="project-card">
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
                              {project.tags.map((tag, idx) => (
                                <span key={idx} className="project-card__tag">
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
                                </span>
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
                                </span>
                                View Code
                              </a>
                            </div>
                          </div>
                          <h3 className="project-card__title">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </Slider>
          </div>
        </>
      </div>
    </section>
  );
};

export default Projects;
