// src/locales/ProjectsData.js
import fweatherImg from "../assets/project-imgs/Fweather.png";
import omdbImg from "../assets/project-imgs/OMDB.png";
import treactImg from "../assets/project-imgs/treact.png";
import nftImg from "../assets/project-imgs/nftmarket.png";
import booksImg from "../assets/project-imgs/books.png";

const projectsData = [
  {
    id: 1,
    title: "NFT Marketplace - Virtual Internship",
    description:
      "Redesigned UI with dynamic skeleton loading states and refactored the application into a responsive single-page architecture.",
    image: nftImg,
    tags: ["React", "Responsive UI", "API Integration", "Dynamic Routing"],
    liveLink:
      "https://nft-marketplace-m-ike-innell-git-40ec1a-mikes-projects-4896b1c6.vercel.app/",
    codeLink:
      "https://github.com/Mike-Innella/nft-marketplace--MIke_Innella-Internship",
  },
  {
    id: 2,
    title: "OMDB Movie Store",
    description:
      "A React app that lets users search movies via the OMDB API, view top-rated picks, and explore recent releases with styled components and responsive UI.",
    image: omdbImg,
    tags: ["React", "Firebase", "Responsive UI", "API Integration"],
    liveLink: "https://mike-innella.github.io/OMDBProject/",
    codeLink: "https://github.com/Mike-Innella/OMDBProject",
  },
  {
    id: 3,
    title: "Fweather",
    description:
      "A sleek React weather app with real-time search, location-based forecasts, and dynamic UI animations.",
    image: fweatherImg,
    tags: ["React", "Node.js", "API Integration"],
    liveLink: "https://mike-innella.github.io/Fweather/",
    codeLink: "https://github.com/Mike-Innella/Fweather",
  },
  {
    id: 4,
    title: "E-Commerce Books",
    description:
      "HTML and CSS designed to provide a sleek and professional appearing template for an e-store.",
    image: booksImg,
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://mike-innella.github.io/E-Commerce/",
    codeLink: "https://github.com/Mike-Innella/E-Commerce",
  },
  {
    id: 5,
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
