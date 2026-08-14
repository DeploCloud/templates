import type { TemplateRaw } from "../../schemas";

export default {
  name: "Flatnotes (TOTP)",
  shortDescription: "Self-hosted Markdown note app, secured with TOTP two-factor login on top of username and password.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"dullage","url":"https://github.com/dullage"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dullage/flatnotes","website":"https://flatnotes.io","docs":"https://github.com/dullage/flatnotes"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
