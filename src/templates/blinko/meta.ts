import type { TemplateRaw } from "../../schemas";

export default {
  name: "Blinko",
  shortDescription: "Self-hosted note-taking app for quickly capturing and organizing ideas and digital content.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"blinkospace","url":"https://github.com/blinkospace"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/blinkospace/blinko","website":"https://blinko.space/","docs":"https://docs.blinko.space/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
