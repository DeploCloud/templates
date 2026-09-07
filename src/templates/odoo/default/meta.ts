import type { TemplateVariantRaw } from "../../../schemas";

export default {
  name: "Default",
  shortDescription:
    "Odoo business management with persistent filestore and PostgreSQL.",
  category: {
    name: "Productivity",
    icon: "list-todo",
    description:
      "Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in.",
  },
  developedBy: { label: "Odoo", url: "https://www.odoo.com/" },
  submittedBy: { label: "Deplo", url: "https://github.com/DeploCloud" },
  links: {
    github: "https://github.com/odoo/odoo",
    website: "https://www.odoo.com/",
    docs: ["https://www.odoo.com/documentation/"],
  },
  lastUpdate: new Date("2026-09-05T00:00:00.000Z"),
  createdAt: new Date("2026-09-05T00:00:00.000Z"),
} satisfies TemplateVariantRaw;
