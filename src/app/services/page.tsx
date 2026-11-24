import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageReveal from "../../components/PageReveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { services } from "../../data/services";

export const metadata: Metadata = {
  title: "Services | Isha Sojitra",
  description: "Odoo development, responsive websites, and e-commerce integration services.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <section className="page-intro section-wrap">
          <PageReveal>
            <div className="eyebrow"><span className="eyebrow-line" /> SERVICES · FROM ERP TO E-COMMERCE</div>
            <h1>Thoughtful software<br /><span>starts with how you work.</span></h1>
            <p>
              I help teams improve their Odoo setup, build useful web experiences, and connect
              commerce operations. We can focus on the specific problem your business needs to solve.
            </p>
          </PageReveal>
        </section>
        <section className="section-wrap services-grid" aria-label="Services offered">
          {services.map((service, index) => (
            <PageReveal className="service-card" key={service.number} delay={index * 0.08}>
              <span className="service-category">{service.number} / {service.category}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>{service.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <Link href={`/services/${service.slug}`}>Explore this service <ArrowUpRight size={14} /></Link>
            </PageReveal>
          ))}
        </section>
        <section className="section-wrap service-cta">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> NOT SURE WHAT FITS?</div>
            <h2>Start with the challenge.<br /><span>We can shape the solution.</span></h2>
            <p>Share where work is getting stuck or what you are planning to build.</p>
          </div>
          <Link className="button button-dark" href="/contact">Talk through your idea <ArrowUpRight size={15} /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
