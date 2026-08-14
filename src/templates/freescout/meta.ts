import type { TemplateRaw } from "../../schemas";

export default {
  name: "FreeScout",
  shortDescription: "Self-hosted help desk and shared inbox for managing customer support email, an alternative to Help Scout and Zendesk.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"freescout-helpdesk","url":"https://github.com/freescout-helpdesk"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/freescout-helpdesk/freescout","website":"https://freescout.net/","docs":"https://github.com/freescout-helpdesk/freescout/wiki/Installation-Guide"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
