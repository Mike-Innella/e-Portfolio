import { Helmet } from "react-helmet-async";
import ProjectsSection from "../components/Projects";
import MatrixRain from "../UI/Animations/MatrixRain";

const Projects = () => {
  return (
    <div className="page projects" style={{ position: "relative", zIndex: 0 }}>
      <Helmet>
        <title>Projects | Mike Innella - Front-End Developer</title>
        <meta
          name="description"
          content="Explore Mike Innella's portfolio of web development projects, including React applications, responsive websites, and interactive user interfaces."
        />
      </Helmet>

      {/* Matrix background animation */}
      <MatrixRain />

      {/* Foreground project content */}
      <ProjectsSection />
    </div>
  );
};

export default Projects;
