import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import profile from "./assets/profile.jpg";
import resume from "./assets/Resume.pdf";
import projectOne from "./assets/project/project-one.png";
import projectTwo from "./assets/project/project-two.png";
import projectThree from "./assets/project/project-three.png";
import projectFour from "./assets/project/project-four.png";
import projectFive from "./assets/project/project-five.png";
import projectSix from "./assets/project/project-six.png";

const projects = [
  { name: "Boox Xplorer", type: "Full-stack web application", tech: "React · Node.js", image: projectOne, github: "https://github.com/sujith017/Book_xplorer.git", live: "https://leafy-tartufo-649229.netlify.app" },
  { name: "Password Manager", type: "Secure credentials platform", tech: "React · Node.js", image: projectTwo, github: "https://github.com/sujith017/Password_manager_full_stack.git" },
  { name: "Disease Predictor", type: "Machine learning application", tech: "Python · Flask", image: projectThree, github: "https://github.com/sujith017/Multiple_Disease_Predictor.git" },
  { name: "Hardware Root of Trust", type: "Mobile security research", tech: "Kotlin", image: projectFour, github: "https://github.com/sujith017/hardware-root-of-trust.git" },
  { name: "Commerce Store", type: "Responsive shopping experience", tech: "React", image: projectFive, github: "https://github.com/sujith017/e-commerce-website.git" },
  { name: "Talent Lens", type: "Talent intelligence platform", tech: "React · Node.js", image: projectSix, github: "https://github.com/sujith017/TalenLens.git" },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => setDarkMode(localStorage.getItem("theme") === "dark"), []);
  useEffect(() => { document.documentElement.dataset.theme = darkMode ? "dark" : "light"; localStorage.setItem("theme", darkMode ? "dark" : "light"); }, [darkMode]);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <header className="site-header"><nav className="nav-shell" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Sujith home"><img src={logo} alt="" /><span>SUJITH<span className="brand-dot">.</span></span></a>
      <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span></span><span></span></button>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}><a href="#about" onClick={closeMenu}>About</a><a href="#projects" onClick={closeMenu}>Work</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="resume-link" href={resume} target="_blank" rel="noreferrer">Resume <Arrow /></a><button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle color theme">{darkMode ? "☀" : "◐"}</button></div>
    </nav></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span></span> Available for new opportunities</p><h1>Crafting <em>useful</em><br />digital experiences.</h1><p className="hero-intro">I’m Sujith — a full-stack developer and cloud data engineer who turns complex ideas into clear, reliable products.</p><div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="mailto:sujithb934@gmail.com">Let’s talk <Arrow /></a></div></div><div className="hero-portrait-wrap"><div className="portrait-accent accent-one"></div><div className="portrait-accent accent-two"></div><div className="portrait-frame"><img src={profile} alt="Sujith" /></div><p className="portrait-note">Based in India<br /><b>Building for the web</b></p></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section>
    <section className="about section" id="about"><p className="section-number">01 / ABOUT</p><div className="about-content"><h2>A developer with a <em>systems</em> mindset.</h2><div><p>I combine thoughtful frontend development with dependable backend and cloud data systems. The result: products that feel effortless to use and are built to grow.</p><div className="skill-list"><span>React & Node.js</span><span>Python & Flask</span><span>Google Cloud</span><span>Data Engineering</span></div></div></div></section>
    <section className="projects section" id="projects"><div className="section-heading"><div><p className="section-number">02 / SELECTED WORK</p><h2>Things I’ve<br /><em>built recently.</em></h2></div><p className="project-heading-copy">A selection of products spanning full-stack web development, machine learning, and security.</p></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><a className="project-image" href={project.live || project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><img src={project.image} alt={`${project.name} project preview`} /><span className="view-project">View project <Arrow /></span></a><div className="project-meta"><span>0{index + 1}</span><span>{project.tech}</span></div><div className="project-title-row"><div><h3>{project.name}</h3><p>{project.type}</p></div><a href={project.github} target="_blank" rel="noreferrer" className="github-link" aria-label={`View ${project.name} code on GitHub`}>GH <Arrow /></a></div></article>)}</div></section>
    <section className="contact" id="contact"><p className="section-number">03 / CONTACT</p><h2>Have an idea?<br /><em>Let’s make it real.</em></h2><a className="email-link" href="mailto:sujithb934@gmail.com">sujithb934@gmail.com <Arrow /></a><div className="contact-footer"><span>© {new Date().getFullYear()} Sujith</span><div><a href="https://github.com/sujith017" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sujith017/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://leetcode.com/u/sujith017/" target="_blank" rel="noreferrer"></a></div></div></section>
  </main>;
}
