import type { TemplateRaw } from "../../schemas";

export default {
  name: "ChirpStack",
  shortDescription: "Open-source LoRaWAN network server for IoT, with gateway bridges, a REST API, and a device management UI.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"chirpstack","url":"https://github.com/chirpstack"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/chirpstack/chirpstack","website":"https://www.chirpstack.io/","docs":"https://www.chirpstack.io/docs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
