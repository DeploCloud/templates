import type { TemplateRaw } from "../../schemas";

export default {
  name: "MacOS (dockerized)",
  shortDescription: "Run a full macOS environment inside a Docker container, accessible over VNC from your browser.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"dockur","url":"https://github.com/dockur"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dockur/macos","docs":"https://github.com/dockur/macos?tab=readme-ov-file#how-do-i-use-it"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
