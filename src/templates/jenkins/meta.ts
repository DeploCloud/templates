import type { TemplateRaw } from "../../schemas";

export default {
  name: "jenkins",
  shortDescription: "Automation server for CI/CD that builds, tests, and deploys software through configurable pipelines.",
  category: {"name":"Automation","icon":"workflow","description":"Workflow builders, schedulers and low-code tools that wire your services together."},
  developedBy: {"label":"jenkinsci","url":"https://github.com/jenkinsci"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/jenkinsci/jenkins","website":"https://www.jenkins.io/","docs":"https://www.jenkins.io/doc/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
