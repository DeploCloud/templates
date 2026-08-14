import type { TemplateRaw } from "../../schemas";

export default {
  name: "Double Zero",
  shortDescription: "Dashboard for sending and monitoring transactional email through Amazon SES, with delivery tracking built in.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"technomancy-dev","url":"https://github.com/technomancy-dev"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/technomancy-dev/00","website":"https://www.double-zero.cloud/","docs":"https://github.com/technomancy-dev/00"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
