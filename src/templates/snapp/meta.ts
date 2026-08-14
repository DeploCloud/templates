import type { TemplateRaw } from "../../schemas";

export default {
  name: "Snapp",
  shortDescription: "Self-hosted screenshot sharing service with user accounts and authentication to keep your captures private.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"UraniaDev","url":"https://github.com/UraniaDev"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/UraniaDev/snapp","website":"https://github.com/UraniaDev/snapp","docs":"https://github.com/UraniaDev/snapp"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
