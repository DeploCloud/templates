import type { TemplateRaw } from "../../schemas";

export default {
  name: "Chromium",
  shortDescription: "Containerized Chromium browser you can access from a web browser for sandboxed, remote browsing.",
  category: {"name":"Development","icon":"code","description":"Git hosting, CI, registries, API tooling and the rest of a developer's own stack."},
  developedBy: {"label":"linuxserver","url":"https://github.com/linuxserver"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/linuxserver/docker-chromium","docs":"https://docs.linuxserver.io/images/docker-chromium","website":"https://docs.linuxserver.io/images/docker-chromium"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
