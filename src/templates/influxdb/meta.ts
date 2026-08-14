import type { TemplateRaw } from "../../schemas";

export default {
  name: "InfluxDB",
  shortDescription: "Time-series database for collecting, storing, and querying metrics, events, and sensor data at scale.",
  category: {"name":"Database","icon":"database","description":"Relational, document and key-value stores, plus the tools to browse and manage them."},
  developedBy: {"label":"influxdata","url":"https://github.com/influxdata"},
  submittedBy: {"label":"Deplo","url":"https://github.com/DeploCloud"},
  links: {"github":"https://github.com/influxdata/influxdb","website":"https://www.influxdata.com/","docs":"https://docs.influxdata.com/influxdb/v2/"},
  lastUpdate: new Date("2026-08-14T00:00:00.000Z"),
  createdAt: new Date("2026-08-14T00:00:00.000Z"),
} satisfies TemplateRaw;
