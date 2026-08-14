import type { TemplateRaw } from "../../schemas";

export default {
  name: "Listmonk",
  shortDescription: "High-performance newsletter and mailing list manager with a modern dashboard for self-hosted email campaigns.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"knadh","url":"https://github.com/knadh"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/knadh/listmonk","website":"https://listmonk.app/","docs":"https://listmonk.app/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
