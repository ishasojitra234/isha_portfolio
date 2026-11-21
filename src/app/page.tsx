"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Workflow,
  X,
} from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectArtwork from "../components/ProjectArtwork";
import { projects } from "../data/projects";

const navigation = [
  ["Work", "#work"],
  ["Expertise", "#expertise"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
] as const;

const skills = [
  {
    title: "Odoo & ERP",
    icon: Layers3,
    items: ["Odoo 16 / 17", "Custom modules", "Business workflows", "Migrations"],
  },
  {
    title: "Backend",
    icon: Code2,
    items: ["Python", "REST APIs", "Integrations", "Automation"],
  },
  {
    title: "Data & reports",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "PDF & Excel reports", "Dashboards"],
  },
  {
    title: "Web & tools",
    icon: Workflow,
    items: ["JavaScript", "OWL · QWeb · XML", "Git · GitLab", "Postman · CI/CD"],
  },
];

const projectFilters = [
  { label: "All projects", value: "all" },
  { label: "Industry solutions", value: "industry" },
  { label: "ERP & operations", value: "operations" },
  { label: "Integrations", value: "integrations" },
] as const;

type ProjectFilter = (typeof projectFilters)[number]["value"];

const experience = [
  {
    period: "Jun 2026 — Now",
    role: "Odoo Developer",
    company: "Pixelwave Infotech",
    location: "Surat, India",
    description:
      "Developing custom Odoo modules, APIs, migrations, reports, and automation for business workflows. Partnering with clients and teammates to shape requirements into reliable ERP solutions.",
    tags: ["Odoo", "Python", "REST APIs", "Migration"],
    current: true,
  },
  {
    period: "Aug 2024 — May 2026",
    role: "Jr. Software Engineer",
    company: "Laxicon Technologies",
    location: "Surat, India",
    description:
      "Built and maintained Odoo ERP solutions across multiple industries, from custom business logic and third-party integrations to reporting, upgrades, deployment, and support.",
    tags: ["Odoo Enterprise", "PostgreSQL", "Integrations", "Reporting"],
    current: false,
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art">
      <Image
        className="hero-portrait"
        src="/isha-sojitra-portrait.png"
        alt="Isha Sojitra working at her laptop"
        fill
        priority
        sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 48vw, 46vw"
      />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("all");
  const visibleProjects = projectFilter === "all"
    ? projects
    : projects.filter((project) => project.group === projectFilter);

  return (
    <MotionConfig reducedMotion="user">
      <main>
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Isha Sojitra home">
            <Image className="wordmark-icon" src="/isha-mark.png" alt="" width={30} height={30} priority />
            <span>ISHA SOJITRA</span>
          </a>
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s talk <ArrowUpRight size={14} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </header>

        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="eyebrow-line" /> ODOO BACKEND DEVELOPER
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Making business
              <br />
              <span>work better.</span>
            </motion.h1>
            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              I&apos;m Isha, an Odoo backend developer turning complex business needs into
              thoughtful ERP workflows, custom modules, and dependable integrations.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
            >
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={16} /></a>
              <a className="text-link" href="/isha-sojitra-resume.pdf" download>
                <Download size={15} /> Download résumé
              </a>
            </motion.div>
            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span><MapPin size={14} /> Surat, India</span>
              <span className="meta-divider" />
              <span className="available"><i /> Open to meaningful opportunities</span>
            </motion.div>
          </div>
          <Reveal className="hero-art-wrap" delay={0.15}>
            <HeroArtwork />
          </Reveal>
          <a href="#work" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <div className="ticker" aria-label="Specialties">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
                <span>ODOO DEVELOPMENT</span><i>✳</i><span>PYTHON &amp; POSTGRESQL</span><i>✳</i><span>ERP INTEGRATIONS</span><i>✳</i><span>BUSINESS AUTOMATION</span><i>✳</i>
              </div>
            ))}
          </div>
        </div>

        <section className="work-section section-wrap section-pad" id="work">
          <Reveal className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> PROJECTS · {projects.length} CASE STUDIES</div>
              <h2>Different challenges.<br /><span>Thoughtful solutions.</span></h2>
            </div>
            <p className="section-note">Odoo customizations, industry workflows, and integrations I&apos;ve contributed to across the projects you shared.</p>
          </Reveal>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => {
              const count = filter.value === "all"
                ? projects.length
                : projects.filter((project) => project.group === filter.value).length;

              return (
                <button
                  className={projectFilter === filter.value ? "project-filter active" : "project-filter"}
                  type="button"
                  key={filter.value}
                  aria-pressed={projectFilter === filter.value}
                  onClick={() => setProjectFilter(filter.value)}
                >
                  {filter.label}<span>{count.toString().padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          <div className="project-list" aria-live="polite">
            {visibleProjects.map((project, index) => {
              const number = (projects.indexOf(project) + 1).toString().padStart(2, "0");

              return (
                <Reveal key={project.slug} delay={(index % 3) * 0.06}>
                  <Link className="project-card" href={`/projects/${project.slug}`}>
                    <ProjectArtwork project={project} number={number} />
                    <div className="project-copy">
                      <div className="project-meta"><span>{project.category}</span><span>{project.version}</span></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.features.map((feature) => <span className="tag" key={feature}>{feature}</span>)}
                      </div>
                      <span className="project-card-cta">Explore case study <ArrowUpRight size={13} /></span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="expertise-section section-wrap section-pad" id="expertise">
          <Reveal className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> WHAT I BRING</div>
              <h2>Good systems start<br />with <span>good thinking.</span></h2>
            </div>
            <p className="section-note">I work across the full journey—from understanding a process to making it run smoothly in Odoo.</p>
          </Reveal>
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <Reveal className="skill-card" key={title} delay={index * 0.06}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={18} /></span><span>0{index + 1}</span></div>
                <h3>{title}</h3>
                <div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </Reveal>
            ))}
          </div>
          <Reveal className="expertise-note">
            <span className="note-star">✳</span>
            <p>Beyond writing code, I care about <strong>clear communication, clean data, and solutions people actually enjoy using.</strong></p>
            <ArrowRight size={18} />
          </Reveal>
        </section>

        <section className="journey-section section-wrap section-pad" id="journey">
          <Reveal className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> EXPERIENCE &amp; EDUCATION</div>
              <h2>A little about<br /><span>my journey.</span></h2>
            </div>
            <p className="section-note">More than two years building and improving ERP experiences with teams and clients.</p>
          </Reveal>
          <div className="journey-grid">
            <div className="experience-list">
              {experience.map((item, index) => (
                <Reveal className="experience-item" key={item.company} delay={index * 0.1}>
                  <div className="experience-marker"><i className={item.current ? "marker-current" : ""} /></div>
                  <div className="experience-content">
                    <div className="experience-period">{item.period}{item.current && <span className="current-label">CURRENT</span>}</div>
                    <h3>{item.role}</h3>
                    <div className="experience-company">{item.company} <span>·</span> {item.location}</div>
                    <p>{item.description}</p>
                    <div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="education-card">
              <div className="education-icon"><GraduationCap size={20} /></div>
              <div className="eyebrow"><span className="eyebrow-line" /> EDUCATION</div>
              <h3>Bachelor of Computer Applications</h3>
              <p className="education-school">Atmanand Saraswati Science College</p>
              <div className="education-meta"><span>Surat, India</span><span>2022 — 2025</span></div>
              <div className="education-grade"><span>CGPA</span><strong>7.39 <small>/ 10</small></strong></div>
              <div className="education-decoration">BCA</div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <Reveal className="contact-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</div>
              <h2>Let&apos;s make<br /><span>it work better.</span></h2>
              <p>I&apos;m always happy to talk about Odoo, ERP challenges, and thoughtful ways to solve them. Have something in mind? I&apos;d love to hear about it.</p>
              <a className="button button-light" href="mailto:ishasojitra234@gmail.com">
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </Reveal>
            <Reveal className="contact-details" delay={0.12}>
              <a className="contact-link" href="mailto:ishasojitra234@gmail.com">
                <span className="contact-icon"><Mail size={17} /></span>
                <span><small>EMAIL ME</small><strong>ishasojitra234@gmail.com</strong></span>
                <ArrowUpRight size={16} />
              </a>
              <a className="contact-link" href="tel:+919016186445">
                <span className="contact-icon"><Phone size={17} /></span>
                <span><small>GIVE ME A CALL</small><strong>+91 90161 86445</strong></span>
                <ArrowUpRight size={16} />
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/isha-sojitra-76a946341" target="_blank" rel="noreferrer">
                <span className="contact-icon"><ExternalLink size={17} /></span>
                <span><small>CONNECT ON LINKEDIN</small><strong>isha-sojitra</strong></span>
                <ArrowUpRight size={16} />
              </a>
              <a className="contact-link" href="https://gitlab.com/isha6445" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Code2 size={17} /></span>
                <span><small>FIND ME ON GITLAB</small><strong>isha6445</strong></span>
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
            <div className="contact-watermark">IS</div>
          </div>
        </section>

        <footer className="site-footer section-wrap">
          <a className="wordmark footer-wordmark" href="#home"><Image className="wordmark-icon" src="/isha-mark.png" alt="" width={25} height={25} /><span>ISHA SOJITRA</span></a>
          <span>Odoo backend developer · Surat, India</span>
          <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a>
          <span className="copyright">© 2026 Isha Sojitra</span>
        </footer>
      </main>
    </MotionConfig>
  );
}
