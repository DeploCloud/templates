import type { TemplateRaw } from "../../schemas";

export default {
  name: "Java Runtime (Multi-Version)",
  shortDescription: "Configurable Java runtime supporting versions 8 through 21, suited for Minecraft servers and Spring Boot apps.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"pterodactyl","url":"https://github.com/pterodactyl"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/pterodactyl/yolks","website":"https://java.com/","docs":"https://docs.oracle.com/en/java/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
