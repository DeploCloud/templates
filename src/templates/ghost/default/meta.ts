import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Ghost publishing platform with MySQL, persistent content and HTTPS public URLs.",
  category: {
    name: "CMS",
    icon: "layout-template",
    description:
      "Blogs, sites, headless content APIs and the storefronts built on top of them.",
  },
  developedBy: { label: "Ghost", url: "https://github.com/TryGhost" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/TryGhost/Ghost",
    website: "https://ghost.org/",
    docs: ["https://ghost.org/docs/config/"],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
