import { useState, useEffect } from "react";
import "../styles/components/about.css";
import { Link } from "react-router-dom";
import headshot from "../assets/headshot-enhanced.png";
import aboutSkills from "../locales/AboutSkills";
import AboutSkeleton from "../UI/Skeleton-Loaders/AboutSkeleton";
import HueShift from "../UI/Animations/HueShift";
import GlassSwipe from "../UI/Animations/GlassSwipe";
import Pulse from "../UI/Animations/Pulse";
import AnimatedCheck from "../UI/Animations/AnimatedCheck";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about" aria-busy={isLoading}>
      <div className="about__container">
        {isLoading ? (
          <AboutSkeleton />
        ) : (
          <>
            <div className="about__image-container">
              <HueShift />
              <img src={headshot} alt="Mike Innella" className="about__image" />
            </div>
            <div className="about__content">
              <h2 className="about__heading">About Me</h2>
              <p className="about__text">
                I build web applications using modern JavaScript technologies
                and enjoy creating clean, responsive designs. With a passion for
                problem-solving and attention to detail, I develop solutions
                that are both functional and user-friendly.
              </p>
              <p className="about__text">
                My approach combines technical expertise with creative thinking
                to deliver high-quality projects that meet client needs and
                exceed expectations.
              </p>

              <div className="about__cta">
                <Link to="/resume" className="resume__button">
                  <i className="fas fa-file-alt"></i> View Resume
                </Link>

                <p className="about__availability">
                  <span className="about__check-icon">
                    <AnimatedCheck />
                  </span>{" "}
                  Available for hire: Immediately
                </p>
              </div>

              <div className="about__wrapper--locate-contact">
                <div className="about__location">
                  <Pulse />
                  <i className="about__location-icon fa-solid fa-location-dot" />
                  <span className="about__location-text">
                    Based in Richmond, VA USA
                  </span>
                  <span className="about__location-subtext">
                    Available remotely!
                  </span>
                </div>
                <div className="location__contact">
                  <Link to="/contact" className="about__contact-link">
                    Let's work together.
                  </Link>
                </div>
              </div>
              <div className="about__skills">
                <h3 className="about__skills-title">Technical Skills</h3>
                <ul className="about__skills-list">
                  {aboutSkills.map((skill, index) => (
                    <li className="about__skill" key={index}>
                      <GlassSwipe />
                      <i className={skill.iconClass}></i>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
