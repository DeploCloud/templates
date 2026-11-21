Deploys the hacdias WebDAV server, a single Go binary that shares one directory over WebDAV behind HTTPS.
Files are stored on a persistent volume mounted at `/data`, and the generated `config.yml` grants one user full create, read, update and delete access.
The account comes from the `WEBDAV_USERNAME` and `WEBDAV_PASSWORD` environment variables; edit `config.yml` to add users, per-path rules or read-only access.
