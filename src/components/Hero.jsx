import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Hi, I'm Mike Innella</h1>
        <p className="hero__subtitle">
          Front-End Developer | Turning Ideas into Interactive Experiences
        </p>
        <p className="hero__subtitle-subtext">
          Front-end focused, with back-end capabilities powered by Firebase.
        </p>
        <Link to="/projects" className="hero__cta">
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
