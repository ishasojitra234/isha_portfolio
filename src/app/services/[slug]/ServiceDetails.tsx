"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import PageReveal from "../../../components/PageReveal";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import type { Service } from "../../../data/services";

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      <SiteHeader />
      <main className="service-detail-page">
        <section className="service-detail-hero section-wrap">
          <Link className="service-detail-back" href="/services">
            <ArrowLeft size={14} /> All services
          </Link>
          <div className="eyebrow">
            <span className="eyebrow-line" /> SERVICE · {service.number}
          </div>
          <p className="service-detail-category">{service.category}</p>
          <h1>{service.title}</h1>
          <p className="service-detail-intro">{service.description}</p>
          <div className="service-detail-actions">
            <Link className="button button-dark" href="/contact">
              Discuss this service <ArrowUpRight size={15} />
            </Link>
            <Link className="small-arrow-link" href="/work">
              View project work <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <section className="service-detail-offerings section-wrap">
          <PageReveal className="service-detail-offerings-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> WHAT I CAN HELP WITH</div>
            <h2>Practical help for the work ahead.</h2>
          </PageReveal>
          <ul className="service-detail-offering-list">
            {service.offerings.map((offering) => (
              <li key={offering}>
                <Check size={15} />
                <span>{offering}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-detail-process section-wrap">
          <PageReveal className="service-detail-process-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> HOW I WORK</div>
            <h2>A clear path from need to delivery.</h2>
          </PageReveal>
          <div className="service-detail-process-grid">
            {service.process.map((step, index) => (
              <PageReveal className="service-detail-process-step" key={step.title} delay={index * 0.06}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </PageReveal>
            ))}
          </div>
        </section>

        <section className="service-detail-cta section-wrap">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> NEXT STEP</div>
            <h2>Let&apos;s talk about what<br /><span>you need to improve.</span></h2>
            <p>Share your goal, current setup, or the process you want to make easier.</p>
          </div>
          <Link className="button button-dark" href="/contact">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
