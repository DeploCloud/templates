import type { TemplateRaw } from "../../schemas";

export default {
  name: "Crowdsec",
  shortDescription: "Open-source security engine that detects and blocks malicious IPs to protect your infrastructure and apps.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"crowdsecurity","url":"https://github.com/crowdsecurity"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/crowdsecurity/crowdsec","website":"https://crowdsec.net/","docs":"https://docs.crowdsec.net"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
