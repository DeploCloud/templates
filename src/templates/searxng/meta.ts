import type { TemplateRaw } from "../../schemas";

export default {
  name: "SearXNG",
  shortDescription: "Privacy-respecting metasearch engine that aggregates results from many search engines without tracking or profiling you.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"searxng","url":"https://github.com/searxng"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/searxng/searxng","website":"https://searxng.github.io/","docs":"https://docs.searxng.github.io/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
