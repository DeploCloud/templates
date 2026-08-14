import type { TemplateRaw } from "../../schemas";

export default {
  name: "Mautic",
  shortDescription: "Open-source marketing automation platform for email campaigns, landing pages, and contact nurturing.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"mautic","url":"https://github.com/mautic"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/mautic/mautic","website":"https://www.mautic.org/","docs":"https://docs.mautic.org/en"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
