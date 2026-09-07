import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription: "Calibre-Web ebook library with persistent configuration.",
  category: {
    name: "Media",
    icon: "clapperboard",
    description:
      "Movie, music, photo and ebook libraries, plus the downloaders and players around them.",
  },
  developedBy: {
    label: "Calibre-Web",
    url: "https://github.com/janeczku/calibre-web",
  },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/janeczku/calibre-web",
    website: "https://github.com/janeczku/calibre-web",
    docs: ["https://docs.linuxserver.io/images/docker-calibre-web/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
