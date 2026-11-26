import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  siJavascript,
  siNextdotjs,
  siOdoo,
  siPostgresql,
  siPython,
  siTypescript,
  siXml,
} from "simple-icons";
import PageReveal from "../components/PageReveal";
import ProjectArtwork from "../components/ProjectArtwork";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { projects, workProjects } from "../data/projects";
import { experience, skills } from "../data/profile";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Isha Sojitra | Software Engineer & Odoo Full-Stack Developer",
  description:
    "Isha Sojitra is a software engineer and Odoo full-stack developer building custom ERP workflows, web experiences, and integrations.",
};

const approach = [
  "Understand the process and the people using it.",
  "Map the data, handoffs, and rules before building.",
  "Develop and test the right Odoo workflow or integration.",
  "Refine the result with practical feedback and support.",
];

const featuredProjects = workProjects.slice(0, 6);

const technologies = [
  { name: "Odoo", icon: siOdoo },
  { name: "Python", icon: siPython },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "Next.js", icon: siNextdotjs },
  { name: "XML / QWeb", icon: siXml },
  { name: "REST APIs", icon: null },
];

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
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> ODOO ENGINEERING · BUSINESS WORKFLOWS
            </div>
            <h1>
              I build systems
              <br />
              <span>for real work.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Isha, a software engineer and Odoo full-stack developer. I turn business
              processes into custom ERP tools, useful integrations, and maintainable solutions.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/work">See selected work <ArrowDownRight size={16} /></Link>
              <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
              <a className="text-link" href="/isha-sojitra-resume.pdf" download>
                <Download size={15} /> Resume
              </a>
            </div>
            <div className="hero-meta">
              {/* <span><MapPin size={14} /> Surat, India</span> */}
              <span className="meta-divider" />
              <span className="available"><i /> Available for remote or on-site work and open to relocating anywhere</span>
            </div>
          </div>
          <PageReveal className="hero-art-wrap" delay={0.12}>
            <HeroArtwork />
          </PageReveal>
        </section>

        <section className="tech-strip" aria-label="Tools and technologies">
          <div className="tech-marquee">
            <div className="tech-marquee-track">
              {[0, 1].map((copy) => (
                <ul className="tech-chip-list" key={copy} aria-hidden={copy === 1}>
                  {/* <li className="tech-strip-label">Tools I work with</li> */}
                  {technologies.map(({ name, icon }) => (
                    <li className="tech-chip" key={name}>
                      {icon ? (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill={`#${icon.hex}`}>
                          <path d={icon.path} />
                        </svg>
                      ) : (
                        <span className="tech-api-icon" aria-hidden="true">API</span>
                      )}
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        <section className="home-services section-wrap">
          <PageReveal className="home-section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> HOW I CAN HELP</div>
              <h2>Good technology starts<br />with <span>the real process.</span></h2>
            </div>
            <Link className="small-arrow-link" href="/services">Explore services <ArrowUpRight size={13} /></Link>
          </PageReveal>
          <div className="home-service-grid">
            {services.map((service, index) => (
              <PageReveal className="home-service-card" key={service.number} delay={index * 0.06}>
                <span className="service-category">{service.number} / {service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/services">View service <ArrowUpRight size={13} /></Link>
              </PageReveal>
            ))}
          </div>
        </section>

        <section className="home-proof">
          <div className="section-wrap home-proof-inner">
            <PageReveal className="home-proof-heading">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> EXPERIENCE IN PRACTICE</div>
              <h2>From process discovery<br />to <span>production support.</span></h2>
              <p>Building and improving Odoo systems alongside teams, across industries and versions.</p>
            </PageReveal>
            <div className="home-stat-grid">
              <PageReveal className="home-stat"><strong>2+</strong><span>years in software and Odoo work</span></PageReveal>
              <PageReveal className="home-stat" delay={0.05}><strong>16</strong><span>project case studies</span></PageReveal>
              <PageReveal className="home-stat" delay={0.1}><strong>14 – 19</strong><span>Odoo versions in project work</span></PageReveal>
              {/* <PageReveal className="home-stat" delay={0.15}><strong>{skills.length}</strong><span>areas of technical focus</span></PageReveal> */}
            </div>
            <Link className="home-proof-link" href="/journey">Explore my experience <ArrowUpRight size={13} /></Link>
          </div>
        </section>

        <section className="home-work section-wrap">
          <PageReveal className="home-section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div>
              <h2>Different challenges.<br /><span>Connected thinking.</span></h2>
            </div>
            <Link className="small-arrow-link" href="/work">View all 16 projects <ArrowUpRight size={13} /></Link>
          </PageReveal>
          <div className="home-project-grid">
            {featuredProjects.map((project, index) => {
              const number = (index + 1).toString().padStart(2, "0");
              return (
                <PageReveal key={project.slug} delay={(index % 3) * 0.05}>
                  <Link className="home-project-card" href={`/projects/${project.slug}`}>
                    <ProjectArtwork project={project} number={number} />
                    <div className="home-project-copy">
                      <span className="project-meta">{project.category} <i>{project.version}</i></span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <span className="small-arrow-link">Read case study <ArrowUpRight size={12} /></span>
                    </div>
                  </Link>
                </PageReveal>
              );
            })}
          </div>
        </section>

        <section className="home-expertise section-wrap">
          <PageReveal className="home-expertise-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> A PRACTICAL APPROACH</div>
            <h2>Business flow first.<br /><span>Technology second.</span></h2>
            <Link className="small-arrow-link" href="/expertise">See my expertise <ArrowUpRight size={13} /></Link>
          </PageReveal>
          <div className="home-expertise-content">
            <p>
              The best solution may be standard Odoo, a focused customization, or a new connection
              between systems. I start with the actual need and choose the simplest reliable fit.
            </p>
            <ul>
              {approach.map((step) => <li key={step}><Check size={13} /> {step}</li>)}
            </ul>
            <div className="home-skill-tags">
              {skills.flatMap((skill) => skill.items.slice(0, 2)).map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="home-journey section-wrap">
          <PageReveal className="home-section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> JOURNEY SO FAR</div>
              <h2>Learning, building,<br /><span>making systems useful.</span></h2>
            </div>
            <Link className="small-arrow-link" href="/journey">Full experience &amp; education <ArrowUpRight size={13} /></Link>
          </PageReveal>
          <div className="home-journey-grid">
            {experience.map((item) => (
              <PageReveal className="home-journey-card" key={item.company}>
                <span className="home-journey-period">{item.period}{item.current ? " · CURRENT" : ""}</span>
                <h3>{item.role}</h3>
                <strong>{item.company} <i>·</i> {item.location}</strong>
                <p>{item.description}</p>
              </PageReveal>
            ))}
            <PageReveal className="home-education-card">
              <GraduationCap size={19} />
              <span>EDUCATION · 2022—2025</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>Atmanand Saraswati Science College · Surat</p>
            </PageReveal>
          </div>
        </section>

        <section className="home-contact-cta section-wrap">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> ANY PROJECT IN MIND?</div>
            <h2>Let&apos;s shape the next<br /><span>useful version.</span></h2>
            <p>Tell me what you are trying to build or improve. We can begin with the current process and find a clear next step.</p>
          </div>
          <Link className="button button-dark" href="/contact">Talk about your project <ArrowRight size={15} /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
