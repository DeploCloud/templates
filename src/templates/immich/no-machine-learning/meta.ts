import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "No Machine Learning",
  shortDescription:
    "Immich photo backup without the machine-learning service for smaller hosts and lower resource use.",
  category: {
    name: "Media",
    icon: "clapperboard",
    description:
      "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
  },
  developedBy: { label: "Immich", url: "https://github.com/immich-app" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/immich-app/immich",
    website: "https://immich.app/",
    docs: ["https://docs.immich.app/FAQ/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
