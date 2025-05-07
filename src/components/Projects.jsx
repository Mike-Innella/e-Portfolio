import React, { useState, useEffect } from "react";
import "../styles/components/projects.css";
import "../styles/swiper.css";
import projectsData from "../locales/ProjectsData";
import SwiperTrack from "../UI/Swiper-Interface/SwiperTrack";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="projects" aria-busy={isLoading}>
      <h2 className="projects__heading">Projects</h2>
      <div className="projects__container">
        <SwiperTrack isLoading={isLoading} projectsData={projectsData} />
      </div>
    </section>
  );
};

export default Projects;
