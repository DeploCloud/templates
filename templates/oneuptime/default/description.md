Deploys OneUptime with its nginx ingress, the app (dashboard, API, status pages, telemetry ingest and workers), a bundled global probe that runs monitor checks, the global runner for runbook steps, and PostgreSQL, ClickHouse and Valkey.
PostgreSQL keeps configuration and state and ClickHouse keeps logs, metrics and traces, each on its own volume; Valkey holds the cache and job queues in memory only.
Open the domain and sign up: the first account becomes the master admin, then finish email, SMS and call settings at /admin/setup.
Upstream lists 8 GB of RAM as the minimum and 16 GB as recommended, and ClickHouse disk usage grows with the telemetry you keep.
