import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "RustDesk ID and relay servers with persistent keys and the official network ports.",
  category: {
    name: "Other",
    icon: "monitor",
    description:
      "Useful self-hosted services that do not fit the more specific catalog categories.",
  },
  developedBy: { label: "RustDesk", url: "https://rustdesk.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/rustdesk/rustdesk-server",
    website: "https://rustdesk.com/",
    docs: ["https://rustdesk.com/docs/en/self-host/"],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
