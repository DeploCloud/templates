import type { TemplateRaw } from "../../schemas";

export default {
  name: "EMQX",
  shortDescription: "Scalable MQTT broker for IoT, connected vehicles, and real-time messaging across millions of devices.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"emqx","url":"https://github.com/emqx"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/emqx/emqx","website":"https://www.emqx.com","docs":"https://docs.emqx.com"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
