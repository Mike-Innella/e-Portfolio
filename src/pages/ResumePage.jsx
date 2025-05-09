import { Helmet } from "react-helmet-async";
import "../styles/pages.css";
import "../styles/components/resume.css";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Michael Innella - Resume - 2025.pdf";

const Resume = () => {
  return (
    <div className="page resume">
      <Helmet>
        <title>Resume | Mike Innella - Front-End Developer</title>
        <meta
          name="description"
          content="View Mike Innella's professional experience, skills, and qualifications as a Front-End Developer based in Richmond, VA."
        />
      </Helmet>

      {/* Resume Content Section */}
      <section id="resume" className="resume__section-full">
        <div className="resume__container">
          <h2 className="resume__title">Michael Innella</h2>
          <p className="resume__subtitle">Frontend Developer · Richmond, VA</p>

          <div className="resume__contact">
            <p>
              Email:{" "}
              <a href="mailto:mainnella@gmail.com">mainnella@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+18048060336">(804) 806-0336</a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Mike-Innella"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mike-Innella
              </a>
            </p>
          </div>

          <div className="resume__section">
            <h3>Professional Summary</h3>
            <p>
              Adaptable and driven Frontend Developer with hands-on training in
              HTML, CSS, JavaScript, and React through the Frontend Simplified
              bootcamp. Brings over five years of customer-facing, fast-paced
              industry experience with strong communication, problem-solving,
              and teamwork skills now applied to dynamic web applications and
              responsive UI development.
            </p>
          </div>

          <div className="resume__section">
            <h3>Technical Skills</h3>
            <ul className="resume__skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Design</li>
              <li>Firebase</li>
              <li>Version Control (Git & GitHub)</li>
              <li>UI/UX Fundamentals</li>
              <li>API Integration</li>
            </ul>
          </div>

          <div className="resume__section">
            <h3>Certifications</h3>
            <p>
              <strong>Frontend Simplified Certificate of Completion</strong> –
              May 2025
            </p>
          </div>

          <div className="resume__section">
            <h3>Relevant Experience</h3>

            <div className="job--wrapper">
              <div className="resume__company">
                <h4>NFT Marketplace Project (Virtual Internship) - Remote</h4>
                <h4 className="resume__job">
                  Frontend Developer (Virtual Internship)
                </h4>
                <p className="resume__date">Apr 2025 - May 2025</p>
                <ul>
                  <li>
                    Refactored components using React Router with hash-based
                    navigation.
                  </li>
                  <li>
                    Redesigned UI with responsive layouts and custom skeleton
                    loaders.
                  </li>
                </ul>
              </div>
            </div>

            <div className="job--wrapper">
              <div className="resume__company">
                <h4>Papermoon - Richmond, VA</h4>
                <h4 className="resume__job">Floor Supervisor & Doorman</h4>
                <p className="resume__date">Jun 2024 - Feb 2025</p>
                <ul>
                  <li className="job--point">
                    Maintained high-pressure environments with safety and
                    coordination.
                  </li>
                  <li className="job--point">
                    Developed leadership and team communication—transferable to
                    agile teams.
                  </li>
                </ul>
              </div>
            </div>

            <div className="job--wrapper">
              <div className="resume__company">
                <h4>Howard's Motor Corp - Williamsburg, VA</h4>
                <h4 className="resume__job">Tire & Lube Technician</h4>
                <p className="resume__date">Dec 2022 - Jun 2024</p>
                <ul>
                  <li className="job--point">
                    Diagnosed mechanical issues and executed repairs with
                    precision.
                  </li>
                  <li className="job--point">
                    Utilized technical documentation skills and systems
                    thinking.
                  </li>
                </ul>
              </div>
            </div>

            <div className="job--wrapper">
              <div className="resume__company">
                <h4>Amazon.com - Henrico Virginia</h4>
                <h4 className="resume__job">Amazon Seller / LLC Owner</h4>
                <p className="resume__date">Dec 2021 - July 2022</p>
                <ul>
                  <li className="job--point">
                    Launched an eCommerce business focused on optimizing resale
                    ROI.
                  </li>
                  <li className="job--point">
                    Handled logistics, digital tools, and market research
                    independently.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume__section">
            <h3>Education</h3>
            <p>
              <strong>Frontend Development - PASS</strong> – Frontend Simplified
              Institute (Online bootcamp) – Completed May 2025
              <br />
              <ul>
                <li className="edu--point">
                  Intensive online bootcamp training with hands-on training and
                  real world experience to learn about Git, GitHub, Node.js,
                  JavaScript, React, HTML, CSS and deployments.
                </li>
              </ul>
            </p>
          </div>

          {/* Professional Profiles & PDF Download */}
          <div className="resume__section resume__indeed-section">
            <h3>Professional Profile</h3>
            <div className="resume__button-container">
              <a
                href="https://www.linkedin.com/in/michael-innella-b5567021b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume__button">
                  <i className="fa-brands fa-linkedin" /> View LinkedIn Profile
                </button>
              </a>
            </div>
            <div className="resume__button-container">
              <a
                href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume__button">
                  <i className="fas fa-briefcase"></i> View Indeed Profile
                </button>
              </a>
            </div>
            <div className="resume__button-container">
              <a
                href={resumePDF}
                download="Michael_Innella_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="resume__button">
                  <i className="fas fa-file-download"></i> Download Resume PDF
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="btn__back--resume">
        <Link to="/about">
          <button className="resume__button">
            <i className="fa-solid fa-hand-point-left" /> Back to About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
