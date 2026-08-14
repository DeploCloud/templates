import type { TemplateRaw } from "../../schemas";

export default {
  name: "Tuwunel",
  shortDescription: "High-performance Matrix homeserver written in Rust, a lightweight alternative to Synapse and successor to Conduwuit.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"matrix-construct","url":"https://github.com/matrix-construct"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/matrix-construct/tuwunel","website":"https://tuwunel.chat","docs":"https://matrix-construct.github.io/tuwunel/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
