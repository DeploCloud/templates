import type { TemplateRaw } from "../../schemas";

export default {
  name: "Pastefy",
  shortDescription: "Open-source pastebin for sharing code and text, with syntax highlighting and OAuth2 sign-in.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"interaapps","url":"https://github.com/interaapps"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/interaapps/pastefy","website":"https://pastefy.app","docs":"https://github.com/interaapps/pastefy/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
