import React, { useState, useEffect } from "react";
import "./App.css"; // Assuming you have CSS files like in your original code.

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document element
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    // Save theme in localStorage
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
              <a href="https://github.com/CommunityPro/portfolio-html">
                <img src="./assets/logo.png" alt="Your Logo" />
              </a>
            </h1>
            {/* Navbar links */}
            <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
              <li><a className="nav-link" href="#projects">PROJECTS</a></li>
              <li><a className="nav-link" href="#">CONTACT</a></li>
              <li><a className="nav-link" href="#">BLOG</a></li>
              <li>
                <a className="nav-link btn btn-primary" href="https://github.com/CommunityPro/portfolio-html">
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
                  <img className="moon" src="assets/moon.svg" alt="moon" />
                  <img className="sun" src="assets/sun.svg" alt="sun" />
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
          <img className="profile-image" src="assets/profile-image.svg" alt="Profile" />
          <h1>Hi I'm Franklin</h1>

          <div className="content-text">
            <h2>Building digital</h2>
            <h2>products, brands, and experience.</h2>

            <p>A Frontend Developer and Visual Designer with experience in web design, brand identity, and product design.</p>
          </div>
          <a href="https://github.com/CommunityPro/portfolio-html" className="btn btn-secondary" target="_blank">
            Connect With Me
          </a>
        </section>
      </header>

      {/* Projects Section */}
      <section id="projects" className="project-container container">
        <div className="division"></div>
        <div className="content-text">
          <h2>Projects</h2>
          <p>Check out some of my personal and paid projects</p>
        </div>

        <article className="project">
          {/* Project Cards */}
          {["Project One", "Project Two", "Project Three", "Project Four", "Project Five", "Project Six"].map((project, index) => (
            <div key={index} className="card">
              <div className="project-info">
                <div className="project-bio">
                  <h3>{project}</h3>
                  <p>React, Redux, SASS</p>
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
          <a href="mailto:communitypro47@gmail.com">communitypro47@gmail.com</a>
          {/* Social Links */}
          <div className="social">
            <a href="#" target="_blank"><img src="./assets/facebook-icon.svg" alt="Facebook" /></a>
            <a href="#" target="_blank"><img src="./assets/twitter-icon.svg" alt="Twitter" /></a>
            <a href="#" target="_blank"><img src="./assets/linkedin-icon.svg" alt="Linkedin" /></a>
            <a href="#" target="_blank"><img src="./assets/github-icon.svg" alt="GitHub" /></a>
            <a href="#" target="_blank"><img src="./assets/hashnode-icon.svg" alt="Hashnode" /></a>
          </div>
          {/* Attribution */}
          <div className="attribution">
            <a href="https://github.com/CommunityPro/portfolio-html" target="_blank" rel="noopener noreferrer">
              <img src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg" alt="attribution" width="150px" />
            </a>
          </div>
          <p>Copyright &copy; Communitypro {currentYear}, All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
