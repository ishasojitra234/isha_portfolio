"use client";

import { ArrowLeft, Check } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
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
  return (
    <motion.section
      className={`reveal${className ? ` ${className}` : ""}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export default function ProjectDetails({
  project,
  projectNumber,
}: {
  project: Project;
  projectNumber: string;
}) {
  const category =
    project.detailCategory ??
    `${project.category} · Odoo ${project.group === "integrations" ? "Integration" : "Customization"}`;
  const version =
    project.edition === "Not specified"
      ? project.version === "Odoo" ? "Not specified" : project.version
      : `${project.version} ${project.edition}`;
  const tools = project.technologies.join(" · ");

  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader />
      <main className="project-detail-page">
        <section className="detail-hero section-wrap">
          <motion.div
            className="detail-hero-copy"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link className="detail-back-link" href="/work">
              <ArrowLeft size={14} /> Back to all projects
            </Link>
            <div className="eyebrow">
              <span className="eyebrow-line" /> PROJECT CASE STUDY · {projectNumber}
            </div>
            <h1>{project.title}</h1>
            <dl className="detail-project-metadata">
              <div>
                <dt>Category</dt>
                <dd>{category}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Version</dt>
                <dd>{version}</dd>
              </div>
              <div>
                <dt>Tools &amp; Platform</dt>
                <dd>{tools}</dd>
              </div>
            </dl>
          </motion.div>
        </section>

        <div className="detail-case-study section-wrap">
          <DetailReveal className="detail-case-section">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </DetailReveal>

          <DetailReveal className="detail-case-section" delay={0.04}>
            <h2>The Challenge</h2>
            <p>{project.context}</p>
          </DetailReveal>

          <DetailReveal className="detail-case-section" delay={0.06}>
            <h2>My Contribution</h2>
            <ul className="detail-contribution-list">
              {project.contributions.map((contribution) => (
                <li key={contribution}><Check size={14} /> {contribution}</li>
              ))}
            </ul>
          </DetailReveal>

          <DetailReveal className="detail-case-section" delay={0.08}>
            <h2>Tools &amp; Platform</h2>
            <p className="detail-tools-line">{tools}</p>
          </DetailReveal>

          <DetailReveal className="detail-case-section detail-case-outcome" delay={0.1}>
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </DetailReveal>
        </div>
      </main>
      <SiteFooter />
    </MotionConfig>
  );
}
