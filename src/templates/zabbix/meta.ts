import type { TemplateRaw } from "../../schemas";

export default {
  name: "Zabbix",
  shortDescription: "Enterprise-grade monitoring platform for networks, servers, and cloud services with metrics, alerting, and dashboards.",
  category: {"name":"Monitoring","icon":"activity","description":"Uptime checks, metrics, logs, traces and alerting for everything you already run."},
  developedBy: {"label":"zabbix","url":"https://github.com/zabbix"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/zabbix/zabbix-docker","website":"https://www.zabbix.com/","docs":"https://www.zabbix.com/documentation/current/en/manual/installation/containers"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
