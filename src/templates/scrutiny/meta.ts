import type { TemplateRaw } from "../../schemas";

export default {
  name: "Scrutiny",
  shortDescription: "Hard drive health dashboard that monitors S.M.A.R.T. data and historical trends to warn you before disks fail.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"AnalogJ","url":"https://github.com/AnalogJ"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/AnalogJ/scrutiny/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
