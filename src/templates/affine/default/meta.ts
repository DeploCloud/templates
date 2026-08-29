import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "AFFiNE collaborative workspace with PostgreSQL, Redis and persistent storage.",
  category: {
    name: "Productivity",
    icon: "layout-dashboard",
    description:
      "Tools for organizing work, teams, projects, notes and everyday operations.",
  },
  developedBy: { label: "AFFiNE", url: "https://affine.pro/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/toeverything/AFFiNE",
    website: "https://affine.pro/",
    docs: ["https://docs.affine.pro/self-host-affine"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
