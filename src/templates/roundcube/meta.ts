import type { TemplateRaw } from "../../schemas";

export default {
  name: "Roundcube",
  shortDescription: "Browser-based IMAP webmail client written in PHP, giving your mail server a clean and familiar inbox interface.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"roundcube","url":"https://github.com/roundcube"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/roundcube/roundcubemail","website":"https://roundcube.net/","docs":"https://roundcube.net/about/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
