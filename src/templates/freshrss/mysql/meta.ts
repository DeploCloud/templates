import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MySQL",
  shortDescription:
    "FreshRSS with MySQL persistence and automated first setup.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "FreshRSS", url: "https://freshrss.org/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/FreshRSS/FreshRSS",
    website: "https://freshrss.org/",
    docs: ["https://freshrss.github.io/FreshRSS/en/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
