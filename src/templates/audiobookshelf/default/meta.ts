import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Audiobook and podcast server with persistent metadata and progress.",
  category: {
    name: "Media",
    icon: "clapperboard",
    description:
      "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
  },
  developedBy: {
    label: "Audiobookshelf",
    url: "https://www.audiobookshelf.org/",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/advplyr/audiobookshelf",
    website: "https://www.audiobookshelf.org/",
    docs: ["https://www.audiobookshelf.org/docs/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
