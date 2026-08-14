import type { TemplateRaw } from "../../schemas";

export default {
  name: "FiveM Server",
  shortDescription: "Dedicated server for hosting modded GTA V multiplayer, with an optional txAdmin web panel for management.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"spritsail","url":"https://github.com/spritsail"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/spritsail/fivem","website":"https://fivem.net/","docs":"https://docs.fivem.net/docs/server-manual/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
