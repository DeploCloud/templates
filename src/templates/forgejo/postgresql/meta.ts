import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Community-driven self-hosted Git forge with repositories, issues, pull requests and PostgreSQL storage.",
  category: {
    name: "Development",
    icon: "code",
    description:
      "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
  },
  developedBy: { label: "Forgejo", url: "https://codeberg.org/forgejo" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://codeberg.org/forgejo/forgejo",
    website: "https://forgejo.org/",
    docs: [
      "https://forgejo.org/docs/latest/admin/installation/database-preparation/",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
