import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectsSection from "../components/Projects";

const Projects = () => {
  return (
    <div className="page projects">
      <Helmet>
        <title>Projects | Mike Innella - Front-End Developer</title>
        <meta name="description" content="Explore Mike Innella's portfolio of web development projects, including React applications, responsive websites, and interactive user interfaces." />
      </Helmet>
      <ProjectsSection />
    </div>
  );
};

export default Projects;
