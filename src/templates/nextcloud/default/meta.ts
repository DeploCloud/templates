import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Self-hosted file storage, synchronization and collaboration for teams and personal data.",
  category: {
    name: "Storage",
    icon: "hard-drive",
    description:
      "Object storage, file sync, backups and the shares and drives behind them.",
  },
  developedBy: { label: "Nextcloud", url: "https://github.com/nextcloud" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/nextcloud/docker",
    website: "https://nextcloud.com/",
    docs: ["https://docs.nextcloud.com/"],
  },
  lastUpdate: new Date("2026-08-25T00:00:00.000Z"),
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
