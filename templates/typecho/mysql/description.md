Typecho is a lightweight PHP blog engine with Markdown editing, themes and plugins. This variant runs the official Apache image with a bundled MySQL 8.4 database and installs the site automatically on first start.

The site root (configuration, uploads, themes and plugins) and the MySQL data persist on separate volumes. Sign in at `/admin/` as `admin` with the generated `TYPECHO_USER_PASSWORD`. Because the whole site root persists, a newer image does not replace the core files; follow the upstream upgrade guide.
