"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers3,
} from "lucide-react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectArtwork from "../../../components/ProjectArtwork";
import type { Project } from "../../../data/projects";

function DetailReveal({
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
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetails({
  project,
  projectNumber,
  previousProject,
  nextProject,
}: {
  project: Project;
  projectNumber: string;
  previousProject?: Project;
  nextProject?: Project;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <main className="project-detail-page">
        <header className="detail-header">
          <Link className="wordmark" href="/#home" aria-label="Isha Sojitra home">
            <Image src="/isha-mark.png" alt="" width={30} height={30} />
            <span>ISHA SOJITRA</span>
          </Link>
          <nav aria-label="Project navigation">
            <Link href="/#work">All projects</Link>
            <Link className="detail-nav-cta" href="/#contact">
              Let&apos;s talk <ArrowUpRight size={14} />
            </Link>
          </nav>
        </header>

        <section className="detail-hero section-wrap">
          <motion.div
            className="detail-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link className="detail-back-link" href="/#work">
              <ArrowLeft size={14} /> Back to all projects
            </Link>
            <div className="eyebrow">
              <span className="eyebrow-line" /> CASE STUDY · {projectNumber}
            </div>
            <div className="detail-meta">
              <span>{project.category}</span>
              <i />
              <span>{project.version}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="detail-intro">{project.description}</p>
            <div className="detail-hero-actions">
              <Link className="button button-dark" href="/#contact">
                Discuss a similar project <ArrowUpRight size={15} />
              </Link>
              <span className="detail-work-label"><Layers3 size={14} /> Odoo project</span>
            </div>
          </motion.div>

          <motion.div
            className="detail-hero-art"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectArtwork project={project} number={projectNumber} />
          </motion.div>
        </section>

        <section className="detail-story section-wrap">
          <DetailReveal className="detail-section-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> PROJECT OVERVIEW</div>
            <h2>Turning a business need<br />into a <span>clearer workflow.</span></h2>
          </DetailReveal>

          <div className="detail-story-grid">
            <DetailReveal className="detail-story-card">
              <span className="detail-card-index">01 / CONTEXT</span>
              <h3>The work</h3>
              <p>{project.context}</p>
            </DetailReveal>
            <DetailReveal className="detail-story-card detail-story-card-accent" delay={0.08}>
              <span className="detail-card-index">02 / APPROACH</span>
              <h3>What I focused on</h3>
              <p>{project.approach}</p>
            </DetailReveal>
          </div>
        </section>

        {project.modules?.length ? (
          <section className="detail-modules section-wrap">
            <DetailReveal className="detail-section-heading">
              <div className="eyebrow"><span className="eyebrow-line" /> MODULE BREAKDOWN</div>
              <h2>What each module<br /><span>brings to the workflow.</span></h2>
            </DetailReveal>
            <div className="detail-module-grid">
              {project.modules.map((module, index) => (
                <DetailReveal className="detail-module-card" key={module.name} delay={(index % 3) * 0.06}>
                  <div className="detail-module-card-top">
                    <span>MODULE {String(index + 1).padStart(2, "0")}</span>
                    <Layers3 size={15} />
                  </div>
                  <h3>{module.name}</h3>
                  {module.technicalName ? <code className="detail-module-technical">{module.technicalName}</code> : null}
                  <p>{module.summary}</p>
                  <ul>
                    {module.capabilities.map((capability) => (
                      <li key={capability}><Check size={13} /> {capability}</li>
                    ))}
                  </ul>
                </DetailReveal>
              ))}
            </div>
            {project.sourceNotes?.length ? (
              <aside className="detail-source-notes">
                <span>SOURCE &amp; SCOPE NOTES</span>
                <ul>
                  {project.sourceNotes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </aside>
            ) : null}
          </section>
        ) : null}

        <section className="detail-scope">
          <div className="section-wrap detail-scope-inner">
            <DetailReveal className="detail-scope-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> SCOPE OF WORK</div>
              <h2>Connected pieces.<br /><span>One useful flow.</span></h2>
              <p>
                The project brings together these Odoo workflows and capabilities:
              </p>
            </DetailReveal>
            <div className="detail-feature-list">
              {project.features.map((feature, index) => (
                <DetailReveal className="detail-feature" key={feature} delay={index * 0.07}>
                  <span className="detail-feature-check"><Check size={14} /></span>
                  <span>{feature}</span>
                  <span className="detail-feature-number">0{index + 1}</span>
                </DetailReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-next section-wrap">
          <DetailReveal className="detail-next-top">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</div>
              <h2>More work, <span>more workflows.</span></h2>
            </div>
            <Link className="detail-back-link" href="/#work">
              View all projects <ArrowRight size={14} />
            </Link>
          </DetailReveal>
          <div className="detail-project-nav">
            {previousProject ? (
              <Link className="detail-project-nav-card" href={`/projects/${previousProject.slug}`}>
                <span><ArrowLeft size={13} /> PREVIOUS PROJECT</span>
                <strong>{previousProject.title}</strong>
              </Link>
            ) : <span />}
            {nextProject ? (
              <Link className="detail-project-nav-card detail-project-nav-next" href={`/projects/${nextProject.slug}`}>
                <span>NEXT PROJECT <ArrowRight size={13} /></span>
                <strong>{nextProject.title}</strong>
              </Link>
            ) : <span />}
          </div>
        </section>

        <footer className="detail-footer">
          <Link href="/#home" className="wordmark footer-wordmark">
            <Image className="wordmark-icon" src="/isha-mark.png" alt="" width={25} height={25} />
            <span>ISHA SOJITRA</span>
          </Link>
          <span>Odoo development · thoughtful business workflows</span>
          <Link href="/#contact">Start a conversation <ArrowUpRight size={13} /></Link>
        </footer>
      </main>
    </MotionConfig>
  );
}
