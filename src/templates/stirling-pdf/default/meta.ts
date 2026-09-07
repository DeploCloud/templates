import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription: "Web PDF toolkit with persistent settings and user data.",
  category: {
    name: "Other",
    icon: "package",
    description:
      "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
  },
  developedBy: { label: "Stirling PDF", url: "https://stirlingtools.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/Stirling-Tools/Stirling-PDF",
    website: "https://stirlingtools.com/",
    docs: ["https://github.com/Stirling-Tools/Stirling-PDF/wiki"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
