import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Hardware Acceleration",
  shortDescription:
    "Jellyfin media server with Linux DRI device access for hardware-accelerated transcoding.",
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
    docs: [
      "https://jellyfin.org/docs/general/installation/container/",
      "https://jellyfin.org/docs/general/post-install/transcoding/hardware-acceleration/",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
