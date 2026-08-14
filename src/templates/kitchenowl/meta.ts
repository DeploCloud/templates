import type { TemplateRaw } from "../../schemas";

export default {
  name: "KitchenOwl",
  shortDescription: "Grocery list and recipe manager that helps you plan meals and share shopping lists across your household.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"TomBursch","url":"https://github.com/TomBursch"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/TomBursch/kitchenowl","website":"https://kitchenowl.org/","docs":"https://github.com/TomBursch/kitchenowl/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
