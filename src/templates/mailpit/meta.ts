import type { TemplateRaw } from "../../schemas";

export default {
  name: "Mailpit",
  shortDescription: "Email and SMTP testing tool that captures messages during development and shows them in a web inbox.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"axllent","url":"https://github.com/axllent"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/axllent/mailpit","website":"https://mailpit.axllent.org/","docs":"https://mailpit.axllent.org/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
