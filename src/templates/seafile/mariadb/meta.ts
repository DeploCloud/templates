import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MariaDB",
  shortDescription:
    "Seafile Community Edition with MariaDB and persistent file storage.",
  category: {
    name: "Storage",
    icon: "hard-drive",
    description:
      "Object storage, file sync, backups and the shares and drives behind them.",
  },
  developedBy: { label: "Seafile", url: "https://www.seafile.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/haiwen/seafile",
    website: "https://www.seafile.com/",
    docs: ["https://manual.seafile.com/latest/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
