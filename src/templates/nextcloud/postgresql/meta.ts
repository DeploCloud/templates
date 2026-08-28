import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Nextcloud file storage and collaboration backed by PostgreSQL instead of MariaDB.",
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
    docs: [
      "https://docs.nextcloud.com/server/latest/admin_manual/installation/installation_wizard.html",
    ],
  },
  lastUpdate: new Date("2026-08-29T00:00:00.000Z"),
  createdAt: new Date("2026-08-29T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
