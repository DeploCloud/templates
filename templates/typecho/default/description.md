Typecho is a lightweight PHP blog engine with Markdown editing, themes and plugins. This variant runs the official Apache image and installs the site automatically on first start, using a SQLite database file.

The site root (configuration, uploads, themes and plugins) and the SQLite database persist on two volumes; the database sits outside the web root. Sign in at `/admin/` as `admin` with the generated `TYPECHO_USER_PASSWORD`. Because the whole site root persists, a newer image does not replace the core files; follow the upstream upgrade guide.
