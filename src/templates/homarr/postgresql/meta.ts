import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Self-hosted Homarr dashboard backed by a dedicated PostgreSQL database for larger installations.",
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
    docs: ["https://homarr.dev/docs/advanced/environment-variables/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
