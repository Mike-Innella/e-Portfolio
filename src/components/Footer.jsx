import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__info">
            <p className="footer__copyright">
              &copy; {currentYear} Mike Innella. All rights reserved.
            </p>
            <p className="footer__tagline">
              Front-End Developer | Available for hire
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer__social">
              <a
                href="https://github.com/Mike-Innella"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/mike-innella"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:contact@mikeinnella.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
