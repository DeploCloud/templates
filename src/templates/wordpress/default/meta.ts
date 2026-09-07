import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "WordPress website with Apache, MySQL and persistent application and database storage.",
  category: {
    name: "CMS",
    icon: "layout-template",
    description:
      "Blogs, sites, headless content APIs and the storefronts built on top of them.",
  },
  developedBy: { label: "WordPress", url: "https://github.com/WordPress" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/WordPress/WordPress",
    website: "https://wordpress.org/",
    docs: ["https://wordpress.org/documentation/"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
