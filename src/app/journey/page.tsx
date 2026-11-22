import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import PageReveal from "../../components/PageReveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { experience } from "../../data/profile";

export const metadata: Metadata = {
  title: "Experience & Education | Isha Sojitra",
  description: "Isha Sojitra's software engineering experience and education.",
};

export default function JourneyPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-intro section-wrap">
          <PageReveal>
            <div className="eyebrow"><span className="eyebrow-line" /> EXPERIENCE &amp; EDUCATION</div>
            <h1>Building experience,<br /><span>one system at a time.</span></h1>
            <p>
              My path has taken me from a computer applications foundation into hands-on Odoo work
              across business operations, integrations, and custom ERP development.
            </p>
          </PageReveal>
        </section>
        <section className="section-wrap journey-page-content">
          <div className="journey-grid">
            <div className="experience-list">
              {experience.map((item, index) => (
                <PageReveal className="experience-item" key={item.company} delay={index * 0.1}>
                  <div className="experience-marker"><i className={item.current ? "marker-current" : ""} /></div>
                  <div className="experience-content">
                    <div className="experience-period">{item.period}{item.current && <span className="current-label">CURRENT</span>}</div>
                    <h2>{item.role}</h2>
                    <div className="experience-company">{item.company} <span>·</span> {item.location}</div>
                    <p>{item.description}</p>
                    <div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  </div>
                </PageReveal>
              ))}
            </div>
            <PageReveal className="education-card">
              <div className="education-icon"><GraduationCap size={20} /></div>
              <div className="eyebrow"><span className="eyebrow-line" /> EDUCATION</div>
              <h2>Bachelor of Computer Applications</h2>
              <p className="education-school">Atmanand Saraswati Science College</p>
              <div className="education-meta"><span>Surat, India</span><span>2022 — 2025</span></div>
              <div className="education-grade"><span>CGPA</span><strong>7.39 <small>/ 10</small></strong></div>
              <div className="education-decoration">BCA</div>
            </PageReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
