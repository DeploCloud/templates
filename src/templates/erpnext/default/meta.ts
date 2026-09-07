import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Complete ERPNext stack with database, Redis and automatic setup.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "ERPNext", url: "https://erpnext.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/frappe/erpnext",
    website: "https://erpnext.com/",
    docs: ["https://docs.frappe.io/erpnext/"],
  },
  lastUpdate: new Date("2026-09-06T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
