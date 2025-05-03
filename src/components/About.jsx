import React from "react";
import "../styles/about.css";
import headshot from "../assets/headshot-enhanced.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__image-container">
          <img src={headshot} alt="Mike Innella" className="about__image" />
        </div>
        <div className="about__content">
          <h2 className="about__heading">About Me</h2>
          <p className="about__text">
            I build web applications using modern JavaScript technologies and
            enjoy creating clean, responsive designs. With a passion for
            problem-solving and attention to detail, I develop solutions that
            are both functional and user-friendly.
          </p>
          <p className="about__text">
            My approach combines technical expertise with creative thinking to
            deliver high-quality projects that meet client needs and exceed
            expectations.
          </p>
          <div className="about__wrapper--locate-contact">
            <div className="about__location">
              <i className="about__location-icon fa-solid fa-location-dot"></i>
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
              <li className="about__skill">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML</span>
              </li>
              <li className="about__skill">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS</span>
              </li>
              <li className="about__skill">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </li>
              <li className="about__skill">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </li>
              <li className="about__skill">
                <i className="devicon-firebase-plain colored"></i>
                <span>Firebase</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
