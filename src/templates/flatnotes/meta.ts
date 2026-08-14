import type { TemplateRaw } from "../../schemas";

export default {
  name: "Flatnotes",
  shortDescription: "Self-hosted note-taking app that stores everything as plain-text Markdown files you fully own.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"dullage","url":"https://github.com/dullage"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dullage/flatnotes","website":"https://flatnotes.io","docs":"https://github.com/dullage/flatnotes"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
