import type { TemplateRaw } from "../../schemas";

export default {
  name: "Mealie (sqlite version)",
  shortDescription: "Recipe manager and meal planner for organizing your collection, shopping lists, and weekly menus.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"mealie-recipes","url":"https://github.com/mealie-recipes"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mealie-recipes/mealie","website":"https://mealie.io/","docs":"https://docs.mealie.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
