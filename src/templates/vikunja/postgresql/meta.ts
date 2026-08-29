import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Vikunja task management backed by an included PostgreSQL database for larger teams.",
  category: {
    name: "Productivity",
    icon: "list-checks",
    description:
      "Tools for organizing work, teams, projects, notes and everyday operations.",
  },
  developedBy: { label: "Vikunja", url: "https://vikunja.io/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/go-vikunja/vikunja",
    website: "https://vikunja.io/",
    docs: ["https://vikunja.io/docs/full-docker-example/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
