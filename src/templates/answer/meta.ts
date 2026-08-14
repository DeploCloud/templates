import type { TemplateRaw } from "../../schemas";

export default {
  name: "Answer",
  shortDescription: "Self-hosted Q&A platform from Apache for building community knowledge bases and help centers.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"apache","url":"https://github.com/apache"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/apache/answer","website":"https://answer.apache.org/","docs":"https://answer.apache.org/docs"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
