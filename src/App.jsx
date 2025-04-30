import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";
import profile from "./assets/profile.jpg";
import resume from "./assets/Resume.pdf";

const projects = [
  {
    name: "Boox Xplorer",
    tech: "React.js + Node.js",
    image: "src/assets/project/project-one.png",
    github: "https://github.com/sujith017/Book_xplorer.git",
    live: "https://leafy-tartufo-649229.netlify.app",
  },
  {
    name: "Password Manager",
    tech: "React.js + Node.js",
    image: "src/assets/project/project-two.png",
    github: "https://github.com/sujith017/Password_manager_full_stack.git",
    live: "#",
  },
  {
    name: "Multiple Disease Prediction",
    tech: "Python flask",
    image: "src/assets/project/project-three.png",
    github: "https://github.com/sujith017/Multiple_Disease_Predictor.git",
    live: "https://project-one-demo.com",
  },
  {
    name: "Hardware Enabled Root of Trust",
    tech: "Kotlin",
    image: "src/assets/project/project-four.png",
    github: "https://github.com/sujith017/hardware-root-of-trust.git",
    live: "https://project-one-demo.com",
  },
  {
    name: "E-Commerce Website",
    tech: "React.js",
    image: "src/assets/project/project-five.png",
    github: "https://github.com/sujith017/e-commerce-website.git",
    live: "https://project-one-demo.com",
  },
  {
    name: "Talent Lens",
    tech: "React.js + Node.js",
    image: "src/assets/project/project-six.png",
    github: "https://github.com/sujith017/TalenLens.git",
    live: "https://project-one-demo.com",
  },
];

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <header id="hero">
        <nav className="navbar">
          <div className="container">
            <h1 id="logo">
              <a href="https://github.com/sujith017">
                <img src={logo} alt="Your Logo" />
              </a>
            </h1>
            <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
              <li><a className="nav-link" href="#projects">PROJECTS</a></li>
              <li><a className="nav-link" href="#">CONTACT</a></li>
              {/* <li><a className="nav-link" href="#">BLOG</a></li> */}
              <li>
                <a className="nav-link btn btn-primary" href={resume}>
                  RESUME <i className="fas fa-arrow-right"></i>
                </a>
              </li>
              <div className="theme-switch">
                <input type="checkbox" id="switch" checked={isDarkMode} onChange={toggleTheme} />
                <label className="toggle-icons" htmlFor="switch">
                  <img className="moon" src={moon} alt="moon" />
                  <img className="sun" src={sun} alt="sun" />
                </label>
              </div>
            </ul>
            <div className="hamburger" onClick={toggleMobileMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>

        <section className="header-container">
          <img className="profile-image" src={profile} alt="Profile" />
          <h1>Hi I'm Sujith</h1>
          <div className="content-text">
            <h2>Full Stack Developer</h2>
            <p>A Full Stack Developer and ML Engineer with experience in web development, ML models.</p>
          </div>
          <a href="mailto:sujithb934@gmail.com" className="btn btn-secondary" target="_blank">
            Connect With Me
          </a>
        </section>
      </header>

      <section id="projects" className="project-container container">
        <div className="division"></div>
        <div className="content-text">
          <h2>Projects</h2>
          <p>Check out some of my personal</p>
        </div>

        <article className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div class="image-container">
              <img
                src={project.image}
                alt={project.name}
                className="image"
              />
              <div class="overlay-text">
              {/* <h5>{project.name}</h5> */}
              {/* <p>{project.tech}</p> */}
              </div>
              </div>

              <br></br>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.tech}</p>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe fa-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </article>

        <a href="#" className="btn btn-secondary" target="_blank">
          See More <i className="fas fa-arrow-right"></i>
        </a>
      </section>

      <footer id="footer">
        <div className="container">
          <a href="mailto:sujithb934@gmail.com">sujithb934@gmail.com</a>
          <div className="social">
            <a href="https://leetcode.com/u/sujith017/" target="_blank"><img src="" alt="Leetcode" /></a>
            <a href="https://www.linkedin.com/in/sujith017/" target="_blank"><img src="" alt="Linkedin" /></a>
            <a href="https://github.com/sujith017" target="_blank"><img src="" alt="GitHub" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
