Nginx Proxy Manager with PostgreSQL storage for proxy hosts, certificates and access lists.

Ports **80 and 443** are published directly on the server for standard HTTP and HTTPS traffic. Both
host ports must be free before deployment and can be used by only one public proxy service on a
server. If another service is already using them, deploy this template on another server. Changing
the host ports requires additional configuration for public proxy hosts.

The generated domain opens the admin UI on container port 81.
