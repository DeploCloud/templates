import type { TemplateRaw } from "../../schemas";

export default {
  name: "Etherpad",
  shortDescription: "Real-time collaborative document editor where multiple people can write and edit the same text at once.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"ether","url":"https://github.com/ether"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/ether/etherpad-lite","website":"https://etherpad.org/","docs":"https://github.com/ether/etherpad-lite/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
