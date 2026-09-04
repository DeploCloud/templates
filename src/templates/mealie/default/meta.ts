import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription: "Recipe manager and meal planner with persistent data.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "Mealie", url: "https://mealie.io/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/mealie-recipes/mealie",
    website: "https://mealie.io/",
    docs: ["https://docs.mealie.io/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
