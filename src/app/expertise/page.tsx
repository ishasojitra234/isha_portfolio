import type { Metadata } from "next";
import { Code2, Database, Layers3, Workflow } from "lucide-react";
import PageReveal from "../../components/PageReveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { expertiseSkills } from "../../data/profile";

const skillIcons = [Layers3, Code2, Database, Workflow];

export const metadata: Metadata = {
  title: "Expertise | Isha Sojitra",
  description: "Odoo 14–19 customization, Python, API integrations, reporting, and modern web development.",
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
              I customize Odoo modules and workflows, build Python backends and API integrations,
              work with PostgreSQL, create QWeb reports, and develop web features with JavaScript,
              OWL, React, and Next.js.
            </p>
          </PageReveal>
        </section>
        <section className="section-wrap expertise-page-content">
          <div className="skills-grid">
            {expertiseSkills.map(({ title, items }, index) => {
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
            <p>
              <strong>Understand → Analyze → Configure or Customize → Develop → Test → Deliver.</strong>{" "}
              I first understand the client&apos;s business requirements and current workflows. Then I
              analyze the need, use standard Odoo where it fits, and customize only when required. I
              test the work, fix issues, and validate functionality before delivery.
            </p>
          </PageReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
