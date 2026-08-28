import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Lightweight self-hosted Git service with repositories, issues, pull requests and SQLite storage.",
  category: {
    name: "Development",
    icon: "code",
    description:
      "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
  },
  developedBy: { label: "Gitea", url: "https://github.com/go-gitea" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/go-gitea/gitea",
    website: "https://about.gitea.com/",
    docs: ["https://docs.gitea.com/installation/install-with-docker/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
