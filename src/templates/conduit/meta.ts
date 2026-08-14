import type { TemplateRaw } from "../../schemas";

export default {
  name: "Conduit",
  shortDescription: "Simple, fast Matrix homeserver written in Rust for hosting your own federated chat.",
  category: {"name":"Communication","icon":"message-circle","description":"Chat, calls, forums and the bots and bridges that connect a team or a community."},
  developedBy: {"label":"famedly","url":"https://github.com/famedly"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://gitlab.com/famedly/conduit","website":"https://conduit.rs/","docs":"https://docs.conduit.rs/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
