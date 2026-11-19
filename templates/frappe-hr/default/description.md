Deploys Frappe HR (version 15 line) with ERPNext on the Frappe Framework, using the upstream image with separate web, websocket, worker and scheduler processes plus MariaDB and Redis.
On first start a one-shot job creates a site named after the deployment domain and installs ERPNext and Frappe HR into it, which takes several minutes.
Sites, uploaded files, logs, the database and the Redis queue persist in named volumes.
Log in as Administrator with the generated ADMIN_PASSWORD, then complete the setup wizard to create your company.
