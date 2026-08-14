import type { TemplateRaw } from "../../schemas";

export default {
  name: "Plane",
  shortDescription: "Open-source project management tool for tracking issues, sprints, and roadmaps across teams.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"makeplane","url":"https://github.com/makeplane"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/makeplane/plane","website":"https://plane.so","docs":"https://docs.plane.so/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
