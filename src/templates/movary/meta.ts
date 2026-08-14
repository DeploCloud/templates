import type { TemplateRaw } from "../../schemas";

export default {
  name: "Movary",
  shortDescription: "Self-hosted movie tracker that logs and rates what you watch, with TMDB data and Plex or Jellyfin sync.",
  category: {"name":"Analytics","icon":"chart-line","description":"Product, web and business analytics, from privacy-first page counters to full dashboards."},
  developedBy: {"label":"leepeuker","url":"https://github.com/leepeuker"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/leepeuker/movary","website":"https://movary.org/","docs":"https://docs.movary.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
