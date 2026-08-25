import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Web UI",
  shortDescription:
    "Distributed S3-compatible object storage for self-hosting, bundled with a web UI for managing buckets and access keys.",
  category: {
    name: "Storage",
    icon: "hard-drive",
    description:
      "Object storage, file sync, backups and the shares and drives behind them.",
  },
  developedBy: { label: "Deuxfleurs", url: "https://github.com/Deuxfleurs" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://git.deuxfleurs.fr/Deuxfleurs/garage",
    website: "https://garagehq.deuxfleurs.fr",
    docs: ["https://garagehq.deuxfleurs.fr/documentation/quick-start/"],
  },
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
