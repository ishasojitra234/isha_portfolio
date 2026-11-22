"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["Expertise", "/expertise"],
  ["Journey", "/journey"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Isha Sojitra home" onClick={() => setMenuOpen(false)}>
        <Image className="wordmark-icon" src="/isha-mark.png" alt="" width={30} height={30} priority />
        <span>ISHA SOJITRA</span>
      </Link>
      <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <Link
            href={href}
            key={href}
            aria-current={pathname === href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>
          Let&apos;s talk <ArrowUpRight size={14} />
        </Link>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
