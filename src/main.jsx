import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Smartphone,
  Trophy,
  X,
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    index: '01',
    title: 'Doctor Appointment App',
    meta: 'Flutter · Dart · Firebase',
    label: 'Mobile Development',
    text: 'A cross-platform appointment app for patients and doctors with authentication, role-based screens, Firestore sync, and clear booking flows.',
  },
  {
    index: '02',
    title: 'REST API User Directory',
    meta: 'Flutter · REST API · JSON',
    label: 'API Integration',
    text: 'A paginated user directory built to practice async requests, API data modeling, JSON parsing, and clean UI states for network-driven apps.',
  },
  {
    index: '03',
    title: 'Web Practice Collection',
    meta: 'HTML · CSS · JavaScript',
    label: 'Frontend Experiments',
    text: 'Small browser projects including Rock Paper Scissors, Currency Converter, and Language Barrier, focused on interaction and API basics.',
  },
];

const services = [
  ['Mobile apps', 'Flutter, Firebase, responsive app screens, and user-friendly flows.'],
  ['Frontend websites', 'React, JavaScript, HTML, CSS, WordPress, and clean website design.'],
  ['Backend learning', 'REST APIs, database thinking, SQL/MySQL, and full-stack workflows.'],
  ['Software practice', 'Git collaboration, debugging, Figma handoff, and practical problem solving.'],
];

const skills = [
  'Flutter',
  'Dart',
  'Firebase',
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Git/GitHub',
  'Figma',
  'WordPress',
  'SQL / MySQL',
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Samip Nepal home">
          Samip Nepal
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
          <a href="#studio" onClick={() => setMenuOpen(false)}>Profile</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <img className="hero-bg" src="/hiking.jpeg" alt="Mountain lake in Nepal" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="section-kicker">Software Development Intern</p>
          <h1>Software, mobile apps, and clean digital experiences.</h1>
          <div className="hero-bottom">
            <p>
              I am Samip Nepal, a CSIT student in Kathmandu learning software development through mobile apps,
              frontend website design, and backend fundamentals at Top Nepal.
            </p>
            <a className="round-link" href="#projects" aria-label="View selected projects">
              <ArrowUpRight size={28} />
            </a>
          </div>
        </div>
      </section>

      <section className="intro-strip" id="studio">
        <div className="portrait-card">
          <img src="/profile.png" alt="Samip Nepal portrait" />
        </div>
        <div className="intro-copy">
          <p className="section-kicker dark">// Profile</p>
          <h2>Building range as an all-round software development intern.</h2>
          <p>
            My strongest direction is mobile development, but I am also growing in frontend and backend work.
            I like learning by making real things: app screens, website sections, API-driven interfaces, and
            practical tools that people can understand quickly.
          </p>
          <div className="fact-grid">
            <span><Smartphone size={18} /> Mobile first</span>
            <span><Code2 size={18} /> Frontend focused</span>
            <span><MapPin size={18} /> Kathmandu, Nepal</span>
          </div>
        </div>
      </section>

      <section className="dark-section" id="work">
        <div className="section-head">
          <p className="section-kicker">// Current Work</p>
          <h2>Top Nepal gives me room to learn across the full software process.</h2>
        </div>
        <div className="work-layout">
          <div className="work-copy">
            <h3>Top Nepal International Pvt. Ltd.</h3>
            <p className="muted-line">Software Development Intern · Past 2 months</p>
            <p>
              Because Top Nepal is a small company, I get exposed to more than one narrow task. I support
              website design and development, practice mobile development thinking, learn frontend implementation,
              and build backend understanding through real business requirements.
            </p>
            <a href="https://topnepal.net/" target="_blank" rel="noreferrer">
              Visit Top Nepal <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="service-list">
            {services.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-showcase" id="projects">
        <div className="section-head">
          <p className="section-kicker dark">// Selected Projects</p>
          <h2>Projects shaped by curiosity, repetition, and practical app-building.</h2>
        </div>
        <div className="horizontal-projects" aria-label="Selected project list">
          {projects.map((project) => (
            <article className="project-panel" key={project.title}>
              <div className="project-index">{project.index}</div>
              <div>
                <p>{project.label}</p>
                <h3>{project.title}</h3>
              </div>
              <p>{project.text}</p>
              <span>{project.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-band">
        <p className="section-kicker">// Toolkit</p>
        <div className="skills-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="life-section">
        <div>
          <p className="section-kicker dark">// Beyond Code</p>
          <h2>Hiking, cricket, and learning keep the work grounded.</h2>
        </div>
        <div className="life-cards">
          <span><Mountain size={20} /> Hiking</span>
          <span><Trophy size={20} /> Cricket</span>
          <span><Code2 size={20} /> Building side projects</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">// Contact</p>
        <h2>Open to junior software roles, internships, and mobile app opportunities.</h2>
        <div className="contact-grid">
          <a href="mailto:samipnepal5@gmail.com"><Mail size={20} /> samipnepal5@gmail.com</a>
          <a href="https://linkedin.com/in/samip-nepal" target="_blank" rel="noreferrer"><ExternalLink size={20} /> LinkedIn</a>
          <a href="https://github.com/Samip-Nepal" target="_blank" rel="noreferrer"><ExternalLink size={20} /> GitHub</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
