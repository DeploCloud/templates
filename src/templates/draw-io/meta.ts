import type { TemplateRaw } from "../../schemas";

export default {
  name: "draw.io",
  shortDescription: "Diagramming and whiteboarding tool for creating flowcharts, network diagrams, and wireframes in the browser.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"jgraph","url":"https://github.com/jgraph"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/jgraph/drawio","website":"https://draw.io/","docs":"https://www.drawio.com/doc/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
