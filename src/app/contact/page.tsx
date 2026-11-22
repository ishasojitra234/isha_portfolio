import type { Metadata } from "next";
import { ArrowUpRight, Code2, Mail, MapPin, Phone } from "lucide-react";
import PageReveal from "../../components/PageReveal";
import ContactForm from "../../components/ContactForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | Isha Sojitra",
  description: "Get in touch with Isha Sojitra about Odoo development, web projects, and integrations.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main contact-page">
        <section className="page-intro section-wrap contact-page-intro">
          <PageReveal>
            <div className="eyebrow"><span className="eyebrow-line" /> LET&apos;S TALK THROUGH YOUR NEXT BUILD</div>
            <h1>What are you hoping<br /><span>to make work better?</span></h1>
            <p>
              Tell me about a process, product, or connection between systems that you would like to improve.
              We can start with the challenge and figure out a practical next step.
            </p>
          </PageReveal>
        </section>

        <section className="section-wrap contact-page-main">
          <PageReveal className="contact-page-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> DIRECT CONTACT</div>
            <h2>A useful conversation<br />can start with one<br />clear question.</h2>
            <p>
              Whether you are planning an Odoo change, a website, or a store integration,
              send a few details about what you need and where things stand today.
            </p>
            <div className="contact-page-links">
              <a href="mailto:ishasojitra234@gmail.com"><span>Email</span><strong>ishasojitra234@gmail.com <ArrowUpRight size={13} /></strong></a>
              <a href="https://wa.me/919016186445" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Message me on WhatsApp <ArrowUpRight size={13} /></strong></a>
              <a href="https://www.linkedin.com/in/isha-sojitra-76a946341" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect with Isha <ArrowUpRight size={13} /></strong></a>
              <a href="tel:+919016186445"><span>Based in</span><strong>Surat, India <MapPin size={13} /></strong></a>
            </div>
            {/* <div className="contact-availability">
              <span><Mail size={14} /> ishasojitra234@gmail.com</span>
              <span><Phone size={14} /> +91 90161 86445</span>
              <span><Code2 size={14} /> Odoo · Python · integrations</span>
            </div> */}
          </PageReveal>
          <PageReveal className="contact-form-wrap" delay={0.1}>
            <ContactForm />
          </PageReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
