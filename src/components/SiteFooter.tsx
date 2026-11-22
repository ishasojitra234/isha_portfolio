import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer site-footer-expanded">
      <div className="footer-main">
        <div className="footer-about">
          <Link className="wordmark footer-wordmark" href="/">
            <Image className="wordmark-icon" src="/isha-mark.png" alt="" width={25} height={25} />
            <span>ISHA SOJITRA</span>
          </Link>
          <p>Odoo engineering for more connected, dependable business workflows.</p>
          <span className="footer-location">India · Available for remote work</span>
        </div>
        <div className="footer-nav">
          <div className="footer-nav-group">
            <span className="footer-label">SERVICES</span>
            <Link href="/services">Odoo development</Link>
            <Link href="/services">Website development</Link>
          </div>
          <div className="footer-nav-group">
            <span className="footer-label">CONNECT</span>
            <a href="https://www.linkedin.com/in/isha-sojitra-76a946341" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
          <Link className="footer-contact-card" href="/contact">
            <span>Any project in mind?</span>
            <strong>Let&apos;s discuss it <ArrowUpRight size={14} /></strong>
          </Link>
      </div>
      <div className="footer-bottom">
        <span>© Isha Sojitra</span>
        <span>Thoughtful software, built around the work.</span>
        <a href="mailto:ishasojitra234@gmail.com"><Mail size={12} /> Email me</a>
      </div>
    </footer>
  );
}
