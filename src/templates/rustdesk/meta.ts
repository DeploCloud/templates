import type { TemplateRaw } from "../../schemas";

export default {
  name: "RustDesk",
  shortDescription: "Open-source remote desktop server for self-hosted screen sharing and remote control, an alternative to TeamViewer.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"rustdesk","url":"https://github.com/rustdesk"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/rustdesk/rustdesk-server","website":"https://rustdesk.com/","docs":"https://rustdesk.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
