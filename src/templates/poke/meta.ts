import type { TemplateRaw } from "../../schemas";

export default {
  name: "Poke",
  shortDescription: "Privacy-focused, self-hosted YouTube front-end for watching and sharing videos without tracking.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"ashley","url":"https://github.com/ashley"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://codeberg.org/ashley/poke","website":"https://poketube.fun/","docs":"https://codeberg.org/ashley/poke"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
