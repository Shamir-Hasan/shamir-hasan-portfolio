import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Code2,
  Layers3,
  Database,
  Wrench,
  Terminal,
  Sparkles,
} from "lucide-react";
import { portfolio } from "./data/portfolio";
import "./styles.css";

const IconMark = () => (
  <span className="brand-mark" aria-hidden="true">
    Shamir Hasan<span>.</span>
  </span>
);

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Shamir Hasan, home">
        <IconMark />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav
        className={open ? "nav nav-open" : "nav"}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-meta">
        <span className="eyebrow">
          <span className="status-dot" /> PORTFOLIO / 2026
        </span>
        <span className="meta-location">INDEPENDENT DEVELOPER</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="intro-kicker">Hi, I’m Shamir Hasan.</p>
          <h1>
            I build digital
            <br />
            <em>things that work.</em>
          </h1>
          <p className="hero-description">
            Full stack web developer focused on turning complex ideas into
            clear, considered, and useful web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Abstract typographic illustration inspired by code"
        >
          <div className="art-topline">
            <span>FIG. 01</span>
            <span>THOUGHT → INTERFACE</span>
          </div>
          <div className="art-window">
            <div className="window-chrome">
              <i />
              <i />
              <i />
              <span>good-work.jsx</span>
            </div>
            <div className="code-art">
              <div>
                <b>01</b>
                <span className="syntax-purple">const</span>{" "}
                <span className="syntax-ink">idea</span> ={" "}
                <span className="syntax-orange">'useful'</span>;
              </div>
              <div>
                <b>02</b>
                <span className="syntax-purple">function</span>{" "}
                <span className="syntax-green">makeItReal</span>() {"{"}
              </div>
              <div>
                <b>03</b>&nbsp;&nbsp;
                <span className="syntax-purple">return</span>{" "}
                <span className="syntax-ink">details</span>
              </div>
              <div>
                <b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;.
                <span className="syntax-green">thoughtful</span>()
              </div>
              <div>
                <b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;.
                <span className="syntax-green">reliable</span>()
              </div>
              <div>
                <b>06</b>&nbsp;&nbsp;&nbsp;&nbsp;.
                <span className="syntax-green">human</span>();
              </div>
              <div>
                <b>07</b>
                {"}"}
              </div>
            </div>
            <div className="art-stamp">
              BUILD
              <br />
              WITH
              <br />
              <span>INTENT.</span>
            </div>
          </div>
          <div className="art-bottomline">
            <span>LESS NOISE. MORE PURPOSE.</span>
            <span>SH—001</span>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <span>SCROLL TO EXPLORE</span>
        <span className="foot-rule" />
        <span>01 / 05</span>
      </div>
    </section>
  );
}

function SectionHeading({ index, eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div className="section-index">
        <span>{index}</span>
        <span className="index-line" />
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <SectionHeading
        index="01"
        eyebrow="A LITTLE ABOUT ME"
        title={
          <>
            Building with
            <br />
            <em>intention.</em>
          </>
        }
        note="A little context, not a life story."
      />
      <div className="about-content">
        <p className="about-lead">
          I’m a full stack web developer who enjoys making the web feel simpler
          — for the people using it and the people maintaining it.
        </p>
        <div className="about-detail">
          <p>
            I like working across the stack: shaping a clear interface,
            connecting it to dependable backend logic, and making sure the
            details hold together. My focus is on building things that solve a
            real problem instead of adding noise.
          </p>
          <p className="editable-note">
            Currently exploring:{" "}
            <span>[Add what you’re learning or building right now]</span>
          </p>
          <a className="text-link" href="#contact">
            A project in mind? Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

const projectThemes = ["project-amber", "project-blue", "project-green"];
function ProjectVisual({ project, index }) {
  return (
    <div
      className={`project-visual ${projectThemes[index % projectThemes.length]}`}
    >
      <div className="visual-label">
        <span>PROJECT / 0{index + 1}</span>
        <span>CONCEPT PREVIEW</span>
      </div>
      {index === 0 ? (
        <div className="vault-preview">
          <div className="mini-sidebar">
            <span className="mini-logo">
              vault<span>.</span>
            </span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="mini-main">
            <div className="mini-greeting">Your space, organized.</div>
            <div className="mini-sub">Everything you keep, in one place.</div>
            <div className="mini-stats">
              <div>
                <b>08</b>
                <small>LINKS</small>
              </div>
              <div>
                <b>12</b>
                <small>FILES</small>
              </div>
              <div>
                <b>04</b>
                <small>ACCOUNTS</small>
              </div>
            </div>
            <div className="mini-file">
              <span className="file-square">↗</span>
              <span>
                <b>Project notes</b>
                <small>Updated just now</small>
              </span>
              <span className="file-arrow">↗</span>
            </div>
          </div>
        </div>
      ) : index === 1 ? (
        <div className="school-preview">
          <div className="school-top">
            <span>INSTITUTION / 01</span>
            <span>MENU +</span>
          </div>
          <div className="school-hero">
            <small>LEARN. BUILD. BECOME.</small>
            <strong>
              Make your
              <br />
              next chapter.
            </strong>
            <span className="school-circle">↗</span>
          </div>
          <div className="school-bottom">
            <span>PROGRAMS & ADMISSIONS</span>
            <span>DISCOVER MORE ↓</span>
          </div>
        </div>
      ) : (
        <div className="dev-preview">
          <span className="dev-tag">PERSONAL / SYSTEM</span>
          <div className="dev-big">
            A better
            <br />
            <i>workflow.</i>
          </div>
          <div className="dev-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="dev-footer">
            <span>DESIGNED TO FOCUS</span>
            <span>↗</span>
          </div>
        </div>
      )}
      <div className="visual-caption">
        Illustrative UI preview — replace with a real screenshot.
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="section-wrap projects-section" id="projects">
      <SectionHeading
        index="02"
        eyebrow="SELECTED WORK"
        title={
          <>
            Made to be
            <br />
            <em>useful.</em>
          </>
        }
        note="A few things I’m building and exploring."
      />
      <div className="project-list">
        {portfolio.projects.map((project, index) => (
          <article
            className={`project-row ${index % 2 ? "project-reverse" : ""}`}
            key={project.name}
          >
            <ProjectVisual project={project} index={index} />
            <div className="project-info">
              <div className="project-overline">
                <span>0{index + 1} / CASE STUDY</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-facts">
                <div>
                  <span>THE PROBLEM</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span>MY CONTRIBUTION</span>
                  <p>{project.contribution}</p>
                </div>
              </div>
              <div className="tech-list">
                {project.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live project <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="link-placeholder">
                    Live demo: <b>add URL</b>
                  </span>
                )}
                {project.source ? (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source code <Github size={15} />
                  </a>
                ) : (
                  <span className="link-placeholder">
                    Source: <b>add URL</b>
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="placeholder-disclaimer">
        Project entries are editable starter content, not claims of completed
        client work. Replace descriptions, previews, and links with verified
        project details.
      </p>
    </section>
  );
}

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Interfaces people can understand and use.",
    items: ["[Add frontend skills]"],
  },
  {
    title: "Backend",
    icon: Layers3,
    description: "Application logic, APIs, and integrations.",
    items: ["[Add backend skills]"],
  },
  {
    title: "Data",
    icon: Database,
    description: "Structured, secure, maintainable data.",
    items: ["[Add database skills]"],
  },
  {
    title: "Tools & workflow",
    icon: Wrench,
    description: "The tools behind a thoughtful process.",
    items: ["Git", "[Add tools you use]"],
  },
];
function Skills() {
  return (
    <section className="section-wrap skills-section" id="skills">
      <SectionHeading
        index="03"
        eyebrow="THE TOOLKIT"
        title={
          <>
            The right tool
            <br />
            <em>for the job.</em>
          </>
        }
        note="A practical toolkit, always evolving."
      />
      <div className="skills-intro">
        <p>
          Technology is a means, not the point. I choose tools to fit the
          problem and keep the result maintainable.
        </p>
        <span className="mono-note">SKILLS / EDITABLE</span>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <article className="skill-group" key={group.title}>
              <div className="skill-number">0{i + 1}</div>
              <Icon size={21} strokeWidth={1.5} />
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section-wrap journey-section">
      <SectionHeading
        index="04"
        eyebrow="THE JOURNEY"
        title={
          <>
            Always in
            <br />
            <em>progress.</em>
          </>
        }
        note="A short record of the work behind the work."
      />
      <div className="journey-line">
        <div className="journey-item">
          <span className="journey-year">NOW</span>
          <span className="journey-dot" />
          <div>
            <h3>Building & learning</h3>
            <p>
              [Add a current project, learning milestone, or technical goal.]
            </p>
          </div>
          <span className="journey-kind">IN PROGRESS</span>
        </div>
        <div className="journey-item">
          <span className="journey-year">NEXT</span>
          <span className="journey-dot" />
          <div>
            <h3>What comes next</h3>
            <p>
              [Add a milestone you’re working toward. Keep it specific and
              honest.]
            </p>
          </div>
          <span className="journey-kind">UP NEXT</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please complete all fields.");
      return;
    }
    if (!portfolio.email || portfolio.email.includes("YOUR_")) {
      setStatus(
        "Your message is ready, but no contact email is configured yet. Add your email in src/data/portfolio.js.",
      );
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`,
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <SectionHeading
          index="05"
          eyebrow="YOUR TURN"
          title={
            <>
              Have a good one
              <br />
              <em>in mind?</em>
            </>
          }
          note="Let’s make something useful."
        />
        <div className="contact-grid">
          <div className="contact-copy">
            <p>
              I’m open to thoughtful conversations about web projects,
              collaboration, and interesting problems.
            </p>
            <a
              className="contact-email"
              href={
                portfolio.email && !portfolio.email.includes("YOUR_")
                  ? `mailto:${portfolio.email}`
                  : undefined
              }
              onClick={(e) => {
                if (!portfolio.email || portfolio.email.includes("YOUR_")) {
                  e.preventDefault();
                  setStatus(
                    "Add your email in src/data/portfolio.js to enable direct contact.",
                  );
                }
              }}
            >
              {portfolio.email && !portfolio.email.includes("YOUR_")
                ? portfolio.email
                : "Add your email address"}{" "}
              <ArrowUpRight size={18} />
            </a>
            <div className="social-links">
              {portfolio.github ? (
                <a href={portfolio.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub <ArrowUpRight size={13} />
                </a>
              ) : (
                <span>
                  <Github size={16} /> GitHub — add profile URL
                </span>
              )}
              {portfolio.linkedin ? (
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
                </a>
              ) : (
                <span>
                  <Linkedin size={16} /> LinkedIn — add profile URL
                </span>
              )}
            </div>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <label>
              Your name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                name="name"
                autoComplete="name"
                placeholder="What should I call you?"
              />
            </label>
            <label>
              Email address
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              What are you thinking?
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                name="message"
                rows="3"
                placeholder="A little about your idea..."
              />
            </label>
            <button className="button button-dark form-submit" type="submit">
              Prepare message <ArrowUpRight size={16} />
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="brand" href="#home">
        <IconMark />
      </a>
      <span>Designed with intent. Built with care.</span>
      <a href="#home" className="back-top">
        BACK TO TOP ↑
      </a>
      <small>© {new Date().getFullYear()} SHAMIR HASAN</small>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-heading, .project-row, .skill-group, .journey-item, .about-content",
    );
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
