import type { TemplateRaw } from "../../schemas";

export default {
  name: "Minepanel",
  shortDescription: "Web panel for managing Docker-based Minecraft servers: create, configure, and monitor multiple instances.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"Ketbome","url":"https://github.com/Ketbome"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/Ketbome/minepanel","website":"https://minepanel.ketbome.lat","docs":"https://minepanel.ketbome.lat"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
