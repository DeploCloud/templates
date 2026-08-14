import type { TemplateRaw } from "../../schemas";

export default {
  name: "Domain Locker",
  shortDescription: "Domain portfolio tracker that monitors expiration dates and sends renewal reminders before names lapse.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"Lissy93","url":"https://github.com/Lissy93"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Lissy93/domain-locker","website":"https://domain-locker.com/","docs":"https://github.com/Lissy93/domain-locker#readme"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
