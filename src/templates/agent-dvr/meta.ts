import type { TemplateRaw } from "../../schemas";

export default {
  name: "Agent DVR",
  shortDescription: "Video surveillance software with motion detection, alerts, and remote access for your security cameras.",
  category: {"name":"Security","icon":"shield","description":"Identity providers, single sign-on, password vaults and secret management."},
  developedBy: {"label":"ispysoftware","url":"https://github.com/ispysoftware"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/ispysoftware/AgentDVR","website":"https://www.ispyconnect.com/","docs":"https://www.ispyconnect.com/userguide-agent-dvr.aspx"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
