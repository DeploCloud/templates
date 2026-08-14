import type { TemplateRaw } from "../../schemas";

export default {
  name: "Spacedrive",
  shortDescription: "Cross-platform file manager built on a virtual distributed filesystem, organizing files across all your devices at once.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"spacedriveapp","url":"https://github.com/spacedriveapp"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/spacedriveapp/spacedrive","website":"https://spacedrive.com/","docs":"https://www.spacedrive.com/docs/product/getting-started/introduction"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
