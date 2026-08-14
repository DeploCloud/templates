import type { TemplateRaw } from "../../schemas";

export default {
  name: "GitLab CE",
  shortDescription: "Open-source DevOps platform for Git hosting, CI/CD pipelines, issue tracking, and project management in one place.",
  category: {"name":"Productivity","icon":"list-todo","description":"Notes, tasks, calendars, wikis and the shared workspaces a team plans its work in."},
  developedBy: {"label":"gitlab-org","url":"https://github.com/gitlab-org"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://gitlab.com/gitlab-org/gitlab-ce","website":"https://gitlab.com/","docs":"https://docs.gitlab.com/ee/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
