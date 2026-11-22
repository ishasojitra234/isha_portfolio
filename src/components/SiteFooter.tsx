import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  ["Services", "/services"],
  ["Projects", "/work"],
  ["Expertise", "/expertise"],
  ["Journey", "/journey"],
] as const;

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
          <span className="footer-label">EXPLORE</span>
          {footerLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/contact">Contact</Link>
        </div>
        <Link className="footer-contact-card" href="/contact">
          <span>Have an Odoo project in mind?</span>
          <strong>Let&apos;s discuss it <ArrowUpRight size={14} /></strong>
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Isha Sojitra</span>
        <span>Thoughtful software, built around the work.</span>
        <a href="mailto:ishasojitra234@gmail.com"><Mail size={12} /> Email me</a>
      </div>
    </footer>
  );
}
