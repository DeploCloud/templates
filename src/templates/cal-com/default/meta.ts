import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription: "Scheduling application with persistent PostgreSQL data.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "Cal.com", url: "https://cal.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/calcom/cal.com",
    website: "https://cal.com/",
    docs: ["https://cal.com/docs"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
