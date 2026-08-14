import type { TemplateRaw } from "../../schemas";

export default {
  name: "Stalwart",
  shortDescription: "All-in-one mail server written in Rust, supporting JMAP, IMAP4, POP3, and SMTP with a focus on security and scalability.",
  category: {"name":"Email","icon":"mail","description":"Mail servers, transactional senders, newsletters and the inboxes to read them in."},
  developedBy: {"label":"stalwartlabs","url":"https://github.com/stalwartlabs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/stalwartlabs/mail-server","website":"https://stalw.art/","docs":"https://stalw.art/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
