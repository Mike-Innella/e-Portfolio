import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/hero.css";
import HeroSkeleton from "../UI/Skeleton Loaders/HeroSkeleton";
import heroBg from "../assets/richmond.jpg";

const Hero = () => {
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => setIsContentLoading(false), 1000);
    return () => clearTimeout(contentTimer);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setIsBgLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className={`hero ${isBgLoaded ? "bg-loaded" : "bg-loading"}`}
      style={isBgLoaded ? { "--hero-bg": `url(${heroBg})` } : {}}
      aria-busy={isContentLoading}
    >
      <div className="hero__content">
        {isContentLoading ? (
          <HeroSkeleton />
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
