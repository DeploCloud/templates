import type { TemplateRaw } from "../../schemas";

export default {
  name: "Tor Browser",
  shortDescription: "Runs the Tor Browser inside a container, accessible from any device through a web-based VNC session.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"DomiStyle","url":"https://github.com/DomiStyle"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/DomiStyle/docker-tor-browser","website":"https://www.torproject.org/","docs":"https://hub.docker.com/r/domistyle/tor-browser"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
