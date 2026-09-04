import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "SQLite",
  shortDescription:
    "Strapi with its built-in SQLite database and persistent media uploads.",
  category: {
    name: "CMS",
    icon: "layout-template",
    description:
      "Blogs, sites, headless content APIs and the storefronts built on top of them.",
  },
  developedBy: { label: "Strapi", url: "https://strapi.io/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/strapi/strapi",
    website: "https://strapi.io/",
    docs: ["https://docs.strapi.io/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
