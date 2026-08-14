import type { TemplateRaw } from "../../schemas";

export default {
  name: "Poste.io",
  shortDescription: "All-in-one mail server with SMTP, IMAP, POP3, antispam, antivirus, webmail, and a web admin panel.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"analogic","url":"https://github.com/analogic"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://bitbucket.org/analogic/mailserver","website":"https://poste.io/","docs":"https://poste.io/doc/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
