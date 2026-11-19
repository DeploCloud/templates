Dex is an OpenID Connect identity provider that federates logins from LDAP, SAML, GitHub, Google and other connectors behind one OIDC issuer at `https://<your domain>`.
This template runs Dex with a PostgreSQL database that persists signing keys, refresh tokens and sessions; the configuration lives in the mounted `config.yaml`.
One static login for the built-in password connector is created from `DEX_ADMIN_EMAIL` and `DEX_ADMIN_PASSWORD`; it is a normal user, not an administrator.
Dex has no admin UI, so add your applications under `staticClients` (and any connectors) in `config.yaml`, then redeploy.
