import React from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../components/About";

const About = () => {
  return (
    <div className="page about">
      <Helmet>
        <title>About | Mike Innella - Front-End Developer</title>
        <meta name="description" content="Learn about Mike Innella's skills, experience, and approach to front-end development. Based in Richmond, VA and available for remote work." />
      </Helmet>
      <AboutSection />
    </div>
  );
};

export default About;
