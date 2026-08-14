import type { TemplateRaw } from "../../schemas";

export default {
  name: "Bluesky PDS",
  shortDescription: "Personal Data Server for Bluesky, letting you host your own account and data on the AT Protocol network.",
  category: {"name":"Analytics","icon":"chart-line","description":"Product, web and business analytics, from privacy-first page counters to full dashboards."},
  developedBy: {"label":"bluesky-social","url":"https://github.com/bluesky-social"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/bluesky-social/pds","website":"https://bsky.social/about","docs":"https://github.com/bluesky-social/pds"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
