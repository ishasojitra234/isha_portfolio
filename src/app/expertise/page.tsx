import type { Metadata } from "next";
import { Code2, Database, Layers3, Workflow } from "lucide-react";
import PageReveal from "../../components/PageReveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { skills } from "../../data/profile";

const skillIcons = [Layers3, Code2, Database, Workflow];

export const metadata: Metadata = {
  title: "Expertise | Isha Sojitra",
  description: "Odoo, Python, integrations, data, reporting, and web development expertise.",
};

export default function ExpertisePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-intro section-wrap">
          <PageReveal>
            <div className="eyebrow"><span className="eyebrow-line" /> HOW I CAN CONTRIBUTE</div>
            <h1>Practical engineering<br /><span>for connected systems.</span></h1>
            <p>
              I work across Odoo backend development, integrations, and reporting—bringing technical
              implementation together with an understanding of the business process behind it.
            </p>
          </PageReveal>
        </section>
        <section className="section-wrap expertise-page-content">
          <div className="skills-grid">
            {skills.map(({ title, items }, index) => {
              const Icon = skillIcons[index];
              return (
                <PageReveal className="skill-card" key={title} delay={index * 0.06}>
                  <div className="skill-card-top">
                    <span className="skill-icon"><Icon size={18} /></span>
                    <span>0{index + 1}</span>
                  </div>
                  <h2>{title}</h2>
                  <div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </PageReveal>
              );
            })}
          </div>
          <PageReveal className="expertise-note">
            <span className="note-star">✳</span>
            <p>Good development is more than code: <strong>clear decisions, dependable data, and tools that fit the way people work.</strong></p>
          </PageReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
