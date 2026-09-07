import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Project management workspace for issues, sprints, roadmaps and team collaboration.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "Plane", url: "https://github.com/makeplane" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/makeplane/plane",
    website: "https://plane.so/",
    docs: ["https://developers.plane.so/self-hosting/methods/docker-compose"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
