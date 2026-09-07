import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Complete AppFlowy Cloud stack with web, API, authentication, search, AI, MinIO and PostgreSQL.",
  category: {
    name: "Productivity",
    icon: "layout-dashboard",
    description:
      "Tools for organizing work, teams, projects, notes and everyday operations.",
  },
  developedBy: { label: "AppFlowy", url: "https://appflowy.io/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/AppFlowy-IO/AppFlowy-Cloud",
    website: "https://appflowy.io/",
    docs: [
      "https://docs.appflowy.io/docs/documentation/appflowy-cloud/deployment",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
