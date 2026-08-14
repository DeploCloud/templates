import type { TemplateRaw } from "../../schemas";

export default {
  name: "Directus",
  shortDescription: "Headless CMS that wraps any SQL database with an instant REST and GraphQL API plus an admin dashboard.",
  category: {"name":"CMS","icon":"layout-template","description":"Blogs, sites, headless content APIs and the storefronts built on top of them."},
  developedBy: {"label":"directus","url":"https://github.com/directus"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/directus/directus","website":"https://directus.io/","docs":"https://docs.directus.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
