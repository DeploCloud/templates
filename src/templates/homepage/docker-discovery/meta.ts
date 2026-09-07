import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Docker Discovery",
  shortDescription:
    "Homepage dashboard with read-only Docker container discovery through a restricted socket proxy.",
  category: {
    name: "Other",
    icon: "package",
    description:
      "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
  },
  developedBy: { label: "Homepage", url: "https://github.com/gethomepage" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/gethomepage/homepage",
    website: "https://gethomepage.dev/",
    docs: ["https://gethomepage.dev/configs/docker/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
