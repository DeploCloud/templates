import type { TemplateRaw } from "../../schemas";

export default {
  name: "IPFS (Kubo)",
  shortDescription: "Run your own node on the IPFS decentralized network to store and serve files over a peer-to-peer gateway.",
  category: {"name":"Storage","icon":"hard-drive","description":"Object storage, file sync, backups and the shares and drives behind them."},
  developedBy: {"label":"ipfs","url":"https://github.com/ipfs"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/ipfs/kubo","website":"https://ipfs.tech/","docs":"https://docs.ipfs.tech/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
