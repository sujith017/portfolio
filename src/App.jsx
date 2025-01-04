import React, { useState, useEffect } from "react";
import "./App.css"; // Assuming you have CSS files like in your original code.
import logo from "./assets/logo.png";
import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";
import profile from "./assets/profile.jpg";
import resume from "./assets/Resume.pdf";
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

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <header id="hero">
        {/* Navbar */}
        <nav className="navbar">
          <div className="container">
            {/* Logo */}
            <h1 id="logo">
              <a href="https://github.com/sujith017">
                <img src={logo} alt="Your Logo" />
              </a>
            </h1>
            {/* Navbar links */}
            <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
              <li><a className="nav-link" href="#projects">PROJECTS</a></li>
              <li><a className="nav-link" href="#">CONTACT</a></li>
              <li><a className="nav-link" href="#">BLOG</a></li>
              <li>
                <a className="nav-link btn btn-primary" href={resume}>
                  RESUME <i className="fas fa-arrow-right"></i>
                </a>
              </li>
              {/* Theme Switch */}
              <div className="theme-switch">
                <input
                  type="checkbox"
                  id="switch"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
                <label className="toggle-icons" htmlFor="switch">
                  <img className="moon" src={moon} alt="moon" />
                  <img className="sun" src= {sun} alt="sun" />
                </label>
              </div>
            </ul>
            {/* Hamburger menu */}
            <div className="hamburger" onClick={toggleMobileMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>

        <section className="header-container">
          <img className="profile-image" src={profile} alt="Profile" />
          <h1>Hi I'm Sujith </h1>

          <div className="content-text">
            <h2>Full Stack Developer</h2>

            <p>A Full Stack Developer and ML Engineer with experience in web development, ML models.</p>
          </div>
          <a href="mailto:sujithb934@gmail.com" className="btn btn-secondary" target="_blank">
            Connect With Me
          </a>
        </section>
      </header>

      {/* Projects Section */}
      <section id="projects" className="project-container container">
        <div className="division"></div>
        <div className="content-text">
          <h2>Projects</h2>
          <p>Check out some of my personal</p>
        </div>

        <article className="project">
          {/* Project Cards */}
          {["Project One", "Project Two", "Project Three", "Project Four", "Project Five", "Project Six"].map((project, index) => (
            <div key={index} className="card">
              <div className="project-info">
                <div className="project-bio">
                  <h3>{project}</h3>
                  <p>React</p>
                </div>

                <div className="project-link">
                  <a href="#" target="_blank"><i className="fab fa-github"></i></a>
                  <a href="#" target="_blank"><i className="fas fa-globe"></i></a>
                </div>
              </div>
            </div>
          ))}
        </article>

        <a href="#" className="btn btn-secondary" target="_blank">
          See More <i className="fas fa-arrow-right"></i>
        </a>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="container">
          <a href="mailto:sujithb934@gmail.com">sujithb934@gmail.com</a>
          {/* Social Links */}
          <div className="social">
            {/* <a href="#" target="_blank"><img src="./assets/facebook-icon.svg" alt="Facebook" /></a> */}
            <a href="https://leetcode.com/u/sujith017/" target="_blank"><img src="" alt="Leetcode" /></a>
            <a href="https://www.linkedin.com/in/sujith017/" target="_blank"><img src="" alt="Linkedin" /></a>
            <a href="https://github.com/sujith017" target="_blank"><img src="" alt="GitHub" /></a>
            {/* <a href="#" target="_blank"><img src="" alt="Hashnode" /></a> */}
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
