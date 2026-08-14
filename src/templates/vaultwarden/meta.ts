import type { TemplateRaw } from "../../schemas";

export default {
  name: "Vaultwarden",
  shortDescription: "Lightweight Bitwarden-compatible password manager server written in Rust, formerly known as bitwarden_rs.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"dani-garcia","url":"https://github.com/dani-garcia"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/dani-garcia/vaultwarden","docs":"https://github.com/dani-garcia/vaultwarden/wiki"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
