import type { Metadata } from "next";
import PageReveal from "../../components/PageReveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import WorkGallery from "../../components/WorkGallery";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Odoo Projects | Isha Sojitra",
  description: "Explore Odoo customizations, integrations, and business workflows across 17 project case studies.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-intro section-wrap">
          <PageReveal>
            <div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK · {projects.length} CASE STUDIES</div>
            <h1>Real workflows,<br /><span>thoughtfully improved.</span></h1>
            <p>
              A closer look at Odoo systems, integrations, and industry-specific workflows I&apos;ve helped shape.
              Select a case study to explore the modules and functionality.
            </p>
          </PageReveal>
        </section>
        <section className="work-section section-wrap work-page-gallery">
          <WorkGallery />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
