import type { TemplateRaw } from "../../schemas";

export default {
  name: "Bugsink",
  shortDescription: "Self-hosted error tracker compatible with the Sentry SDK for capturing and monitoring application exceptions.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"bugsink","url":"https://github.com/bugsink"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/bugsink/bugsink/","website":"https://www.bugsink.com/","docs":"https://www.bugsink.com/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
