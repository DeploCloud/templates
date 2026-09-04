import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "SQLite",
  shortDescription:
    "PhotoPrism with its built-in SQLite database and persistent photo storage.",
  category: {
    name: "Media",
    icon: "clapperboard",
    description:
      "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
  },
  developedBy: { label: "PhotoPrism", url: "https://github.com/photoprism" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/photoprism/photoprism",
    website: "https://www.photoprism.app/",
    docs: ["https://docs.photoprism.app/getting-started/docker-compose/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
