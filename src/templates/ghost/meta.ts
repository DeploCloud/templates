import type { TemplateRaw } from "../../schemas";

export default {
  name: "Ghost",
  shortDescription: "Open-source publishing platform for blogs, newsletters, and paid memberships, built on a modern Node.js stack.",
  category: {"name":"CMS","icon":"layout-template","description":"Blogs, sites, headless content APIs and the storefronts built on top of them."},
  developedBy: {"label":"TryGhost","url":"https://github.com/TryGhost"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/TryGhost/Ghost","website":"https://ghost.org/","docs":"https://ghost.org/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
