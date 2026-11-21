Deploys Frappe Helpdesk on the Frappe Framework from the upstream image, with separate web, websocket, worker and scheduler processes plus MariaDB and Redis.
On first start a one-shot job creates a site named after the deployment domain and installs Helpdesk into it, which takes several minutes; later starts run the database migrations instead.
Sites, uploaded files, logs, the database and the Redis queue persist in named volumes.
Log in as Administrator with the generated ADMIN_PASSWORD, complete the setup wizard, then open /helpdesk for the agent portal and add an email account to turn incoming mail into tickets.
