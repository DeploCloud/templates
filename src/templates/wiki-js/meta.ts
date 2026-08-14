import type { TemplateRaw } from "../../schemas";

export default {
  name: "Wiki.js",
  shortDescription: "Extensible open-source wiki platform for building documentation and knowledge bases with Markdown and access control.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"requarks","url":"https://github.com/requarks"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/requarks/wiki","website":"https://js.wiki/","docs":"https://docs.requarks.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
