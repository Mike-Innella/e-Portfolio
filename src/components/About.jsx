import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/about.css";
import headshot from "../assets/headshot-enhanced.png";
import resumePDF from "../assets/Resume.pdf";
import aboutSkills from "../locales/AboutSkills";
import AboutSkeleton from "../UI/Skeleton-Loaders/AboutSkeleton";
import HueShift from "../UI/Animations/HueShift";
import GlassSwipe from "../UI/Animations/GlassSwipe";
import Pulse from "../UI/Animations/Pulse";

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    link.classList.add("animate");

    setTimeout(() => {
      navigate("/contact");
    }, 800);
  };

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
            <div className="about__content">
              <div className="about__top-content">
                <div className="about__image-container">
                  <HueShift />
                  <img
                    src={headshot}
                    alt="Mike Innella"
                    className="about__image"
                  />
                </div>
                <div className="text-cta--wrapper">
                  <div className="about--text">
                    <h2 className="about__heading">About Me</h2>
                    <p className="about__text">
                      I build web applications using modern JavaScript
                      technologies and enjoy creating clean, responsive designs.
                      With a passion for problem-solving and attention to
                      detail, I develop solutions that are both functional and
                      user-friendly.
                    </p>
                    <p className="about__text">
                      My approach combines technical expertise with creative
                      thinking to deliver high-quality projects that meet client
                      needs and exceed expectations.
                    </p>
                  </div>
                  <div className="cta--wrapper">
                    <div className="about__cta">
                      <div className="resume__section resume__indeed-section">
                        <h3>Professional Profile</h3>
                        <div className="resume__button-container">
                          <a
                            href="https://www.linkedin.com/in/michael-innella-b5567021b/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="resume__button">
                              <i className="fa-brands fa-linkedin" /> View
                              LinkedIn Profile
                            </button>
                          </a>
                        </div>
                        <div className="resume__button-container">
                          <a
                            href="https://my.indeed.com/p/michaeli-b5567021b"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="resume__button">
                              <i className="fas fa-briefcase"></i> View Indeed
                              Profile
                            </button>
                          </a>
                        </div>
                        <div className="resume__button-container">
                          <a
                            href={resumePDF}
                            download="Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="resume__button">
                              <i className="fas fa-file-download"></i> Download
                              Resume PDF
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="cta--available">
                      <p className="about__availability">
                        <span className="about__check-icon">
                          <i className="fa-solid fa-check"></i>
                        </span>{" "}
                        Available for hire: Immediately
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about__bottom-content">
                <div className="about__wrapper--locate-contact">
                  <div className="about__location">
                    <Pulse />
                    <i className="about__location-icon fa-solid fa-location-dot" />
                    <span className="about__location-text">
                      Richmond, VA USA
                    </span>
                    <span className="about__location-subtext">
                      Available remotely!
                    </span>
                  </div>
                  <div className="location__contact">
                    <button
                      className="about__contact-link"
                      onClick={handleContactClick}
                      style={{ position: "relative" }}
                    >
                      <span className="avatar" />
                      Let's work together.
                    </button>
                  </div>
                </div>
                <div className="about__skills--wrapper">
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
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
