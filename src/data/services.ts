export const services = [
  {
    slug: "odoo-development",
    number: "01",
    category: "ODOO · ERP · BUSINESS AUTOMATION",
    title: "Odoo Development & Customization",
    description:
      "I help businesses improve everyday operations with Odoo by building custom modules, adapting features, connecting tools, and automating workflows.",
    highlights: [
      "Custom modules and workflow automation",
      "Reports, APIs, and integrations",
      "Implementation and migration",
    ],
    offerings: [
      "Odoo module development and customization",
      "Odoo implementation and configuration",
      "Custom reports and PDF reports",
      "Third-party API integrations and webhooks",
      "Odoo version upgrades and data migration",
      "Workflow automation and technical support",
    ],
    process: [
      {
        title: "Understand the workflow",
        description: "Review how the team works today and identify what needs to improve.",
      },
      {
        title: "Configure or build",
        description: "Use standard Odoo where it fits, then add focused customizations as needed.",
      },
      {
        title: "Test and support",
        description: "Check real user scenarios and help prepare the solution for day-to-day use.",
      },
    ],
  },
  {
    slug: "website-development",
    number: "02",
    category: "WEBSITES · RESPONSIVE DESIGN · NEXT.JS",
    title: "Website Development",
    description:
      "I create responsive websites that help businesses present their services clearly and build a stronger online presence.",
    highlights: [
      "Business and portfolio websites",
      "Responsive pages and landing pages",
      "Next.js and React development",
    ],
    offerings: [
      "Business and portfolio websites",
      "Custom website development",
      "Landing page development",
      "Responsive user-interface design",
      "Next.js and React development",
      "Website optimization and deployment",
    ],
    process: [
      {
        title: "Plan the content",
        description: "Clarify the audience, key information, and actions each page should support.",
      },
      {
        title: "Design and build",
        description: "Create a clear visual system and develop responsive pages for different screens.",
      },
      {
        title: "Test and launch",
        description: "Check the experience, refine performance, and prepare the site for deployment.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    number: "03",
    category: "E-COMMERCE · SHOPIFY · ODOO",
    title: "E-commerce Development & Integration",
    description:
      "I build online-store features and connect stores with Odoo and other business systems to keep products, orders, and inventory in sync.",
    highlights: [
      "Odoo and store integrations",
      "Product and inventory sync",
      "Order workflow automation",
    ],
    offerings: [
      "Odoo e-commerce customization",
      "Shopify and Odoo integration",
      "WooCommerce integration",
      "Product and inventory synchronization",
      "Order management automation",
      "Third-party API integration",
    ],
    process: [
      {
        title: "Map store operations",
        description: "Identify the product, order, stock, and fulfilment information that must stay aligned.",
      },
      {
        title: "Connect the systems",
        description: "Configure or build integrations around the store and business workflows.",
      },
      {
        title: "Check the order flow",
        description: "Test key updates between systems and refine the process before handover.",
      },
    ],
  },
] as const;

export type Service = (typeof services)[number];
