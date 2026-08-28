import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted media server for streaming personal movies, shows, music and photos.",
  category: {
    name: "Media",
    icon: "clapperboard",
    description:
      "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
  },
  developedBy: { label: "Jellyfin", url: "https://github.com/jellyfin" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/jellyfin/jellyfin",
    website: "https://jellyfin.org/",
    docs: ["https://jellyfin.org/docs/"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
