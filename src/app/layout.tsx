import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Isha Sojitra | Odoo Backend Developer",
  description:
    "Isha Sojitra is an Odoo backend developer building thoughtful ERP solutions, custom modules, and integrations.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Isha Sojitra | Odoo Backend Developer",
    description:
      "Odoo backend developer focused on scalable ERP solutions and practical integrations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha Sojitra | Odoo Backend Developer",
    description:
      "Odoo backend developer focused on scalable ERP solutions and practical integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
