import type { TemplateRaw } from "../../schemas";

export default {
  name: "Blender",
  shortDescription: "Free 3D creation suite covering modeling, animation, rendering, compositing, and video editing.",
  category: {"name":"Other","icon":"package","description":"Everything else worth self-hosting: games, utilities and the odd one-off tool."},
  developedBy: {"label":"linuxserver","url":"https://github.com/linuxserver"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/linuxserver/docker-blender","website":"https://www.blender.org/","docs":"https://docs.blender.org/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
