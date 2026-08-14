import type { TemplateRaw } from "../../schemas";

export default {
  name: "Windows (dockerized)",
  shortDescription: "Runs a full Windows desktop inside a Docker container, accessible through your browser via a built-in VNC viewer.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"dockur","url":"https://github.com/dockur"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dockur/windows","docs":"https://github.com/dockur/windows?tab=readme-ov-file#how-do-i-use-it"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
