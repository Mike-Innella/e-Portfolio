// src/locale/projectsData.js
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

export default projectsData;
