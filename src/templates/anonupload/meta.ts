import type { TemplateRaw } from "../../schemas";

export default {
  name: "AnonUpload",
  shortDescription: "Anonymous file-sharing service that needs no database and keeps uploaded filenames private.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"supernova3339","url":"https://github.com/supernova3339"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/supernova3339/anonupload","docs":"https://github.com/Supernova3339/anonupload/blob/main/env.md","website":"https://anonupload.com/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
