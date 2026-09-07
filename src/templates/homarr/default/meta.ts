import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted home dashboard for organizing services, links and widgets with a zero-setup SQLite database.",
  category: {
    name: "Other",
    icon: "package",
    description:
      "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
  },
  developedBy: { label: "Homarr", url: "https://github.com/homarr-labs" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/homarr-labs/homarr",
    website: "https://homarr.dev/",
    docs: ["https://homarr.dev/docs/getting-started/installation/docker/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
