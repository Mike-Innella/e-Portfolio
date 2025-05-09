import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="page home">
      <Helmet>
        <title>Mike Innella | Front-End Developer</title>
        <meta
          name="description"
          content="Front-End Developer turning ideas into interactive experiences. View my portfolio of web development projects."
        />
      </Helmet>
      <Hero />
    </div>
  );
};

export default Home;
