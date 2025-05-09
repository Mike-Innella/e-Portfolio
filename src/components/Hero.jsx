import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/hero.css";
import heroBg from "../assets/richmond.jpg";
import HeroFade from "../UI/Animations/HeroFade";

const Hero = () => {
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsContentLoading(false), 800);
    return () => clearTimeout(timer);
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
      {!isContentLoading && isBgLoaded && (
        <>
          <HeroFade delay={200}>
            <div className="hero__content">
              <h1 className="hero__title">Hi, I'm Mike Innella</h1>
              <p className="hero__subtitle">
                Front-End Developer | Turning Ideas into Interactive Experiences
              </p>
              <p className="hero__subtitle-subtext">
                Front-end focused, with back-end capabilities powered by
                Firebase.
              </p>
            </div>
          </HeroFade>

          <Link to="/projects" className="hero__cta animate-up">
            View My Work
          </Link>
        </>
      )}
    </section>
  );
};

export default Hero;
