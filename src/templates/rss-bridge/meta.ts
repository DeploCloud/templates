import type { TemplateRaw } from "../../schemas";

export default {
  name: "RSS-Bridge",
  shortDescription: "PHP tool that generates RSS and Atom feeds for sites that don't publish their own, so you can follow them in any reader.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"RSS-Bridge","url":"https://github.com/RSS-Bridge"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/RSS-Bridge/rss-bridge","website":"https://rss-bridge.github.io/rss-bridge/","docs":"https://rss-bridge.github.io/rss-bridge/General/Project_goals.html"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
