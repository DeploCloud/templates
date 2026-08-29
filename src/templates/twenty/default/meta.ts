import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted Twenty CRM with its API, worker, PostgreSQL and Redis services.",
  category: {
    name: "Productivity",
    icon: "layout-dashboard",
    description:
      "Tools for organizing work, teams, projects, notes and everyday operations.",
  },
  developedBy: { label: "Twenty", url: "https://twenty.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/twentyhq/twenty",
    website: "https://twenty.com/",
    docs: [
      "https://docs.twenty.com/developers/self-host/capabilities/docker-compose",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
