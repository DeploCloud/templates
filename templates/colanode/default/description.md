Deploys the Colanode server and its web client on one domain, with the server API under /api, plus PostgreSQL with pgvector and Valkey.
Workspace data lives in PostgreSQL, uploaded files in a persistent storage volume, and Valkey keeps its snapshot in its own volume.
After deployment, open the web client in a desktop browser, add the server with https://your-domain/api/config and register your account.
Server settings such as email, sign-up verification or S3 storage are changed in the mounted config.json.
