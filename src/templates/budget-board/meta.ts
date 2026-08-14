import type { TemplateRaw } from "../../schemas";

export default {
  name: "Budget Board",
  shortDescription: "Self-hosted personal budgeting app with a web UI and a PostgreSQL-backed server for tracking finances.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"teelur","url":"https://github.com/teelur"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/teelur/budget-board","website":"https://budgetboard.net/","docs":"https://budgetboard.net/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
