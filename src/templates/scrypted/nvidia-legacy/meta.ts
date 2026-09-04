import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "NVIDIA Legacy",
  shortDescription:
    "Scrypted with legacy NVIDIA acceleration for video processing.",
  category: {
    name: "Other",
    icon: "package",
    description:
      "Everything else worth self-hosting: games, utilities and the odd one-off tool.",
  },
  developedBy: { label: "Scrypted", url: "https://scrypted.app/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/koush/scrypted",
    website: "https://scrypted.app/",
    docs: ["https://docs.scrypted.app/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
