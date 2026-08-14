import type { TemplateRaw } from "../../schemas";

export default {
  name: "Trilium",
  shortDescription: "Hierarchical note-taking app for building large personal knowledge bases with linked, structured notes.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"zadam","url":"https://github.com/zadam"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/zadam/trilium","website":"https://github.com/zadam/trilium","docs":"https://github.com/zadam/trilium/wiki/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
