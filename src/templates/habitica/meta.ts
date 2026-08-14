import type { TemplateRaw } from "../../schemas";

export default {
  name: "Habitica",
  shortDescription: "Habit and to-do tracker that gamifies your daily goals with rewards, penalties, and a social party system.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"HabitRPG","url":"https://github.com/HabitRPG"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/HabitRPG/habitica","website":"https://habitica.com/","docs":"https://habitica.fandom.com/wiki/Setting_up_Habitica_Locally"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
