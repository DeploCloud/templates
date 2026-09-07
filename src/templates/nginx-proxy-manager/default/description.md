Nginx Proxy Manager provides a web UI for reverse proxies, redirects, streams and free TLS
certificates. This SQLite variant persists proxy data and certificates.

Ports **80 and 443** are published directly on the server for standard HTTP and HTTPS traffic. Both
host ports must be free before deployment and can be used by only one public proxy service on a
server. If another service is already using them, deploy this template on another server. Changing
the host ports requires additional configuration for public proxy hosts.

The generated domain opens the admin UI on container port 81.
