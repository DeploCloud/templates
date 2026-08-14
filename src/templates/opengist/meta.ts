import type { TemplateRaw } from "../../schemas";

export default {
  name: "OpenGist",
  shortDescription: "Self-hosted pastebin and snippet sharing service, an open-source alternative to GitHub Gist backed by Git.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"thomiceli","url":"https://github.com/thomiceli"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/thomiceli/opengist","website":"https://github.com/thomiceli/opengist","docs":"https://github.com/thomiceli/opengist"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
