import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "High-performance self-hosted photo and video backup for phones and personal libraries.",
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
    docs: ["https://immich.app/docs/overview/introduction"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
