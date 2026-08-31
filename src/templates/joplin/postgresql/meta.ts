import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "PostgreSQL",
  shortDescription:
    "Joplin note synchronization server backed by a persistent PostgreSQL database.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "Joplin", url: "https://github.com/laurent22" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/laurent22/joplin",
    website: "https://joplinapp.org/",
    docs: [
      "https://github.com/laurent22/joplin/blob/dev/packages/server/README.md",
    ],
  },
  lastUpdate: new Date("2026-08-31T00:00:00.000Z"),
  createdAt: new Date("2026-08-31T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
