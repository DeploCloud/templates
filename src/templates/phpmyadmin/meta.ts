import type { TemplateRaw } from "../../schemas";

export default {
  name: "Phpmyadmin",
  shortDescription: "Web interface for administering MySQL and MariaDB databases, from running queries to managing tables.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"phpmyadmin","url":"https://github.com/phpmyadmin"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/phpmyadmin/phpmyadmin","website":"https://www.phpmyadmin.net/","docs":"https://www.phpmyadmin.net/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
