import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "MySQL",
  shortDescription:
    "Memos with mysql persistence for larger or managed deployments.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "Memos", url: "https://github.com/usememos" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/usememos/memos",
    website: "https://usememos.com/",
    docs: ["https://usememos.com/docs/deploy/docker"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
