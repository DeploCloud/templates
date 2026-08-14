import type { TemplateRaw } from "../../schemas";

export default {
  name: "RabbitMQ",
  shortDescription: "Open-source message broker that queues and routes messages between services using AMQP and other protocols.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"rabbitmq","url":"https://github.com/rabbitmq"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/rabbitmq/rabbitmq-server","website":"https://www.rabbitmq.com/","docs":"https://www.rabbitmq.com/documentation.html"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
