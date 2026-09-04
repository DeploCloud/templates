import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MySQL",
  shortDescription: "Directus with MySQL persistence and persistent uploads.",
  category: {
    name: "Development",
    icon: "code",
    description:
      "Git hosting, CI, registries, API tooling and the rest of a developer's own stack.",
  },
  developedBy: { label: "Directus", url: "https://directus.io/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/directus/directus",
    website: "https://directus.io/",
    docs: ["https://docs.directus.io/self-hosted/quickstart.html"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
