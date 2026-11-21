Kener is a status page with built-in monitors, incident management and alerting. This variant runs
the Kener server with its default SQLite database plus the Redis instance it requires for
background jobs. The SQLite database, including uploaded images, persists in `/app/database` and
Redis keeps its data on its own volume. Open `/account/signin` after the first start to create the
administrator account, then set the Site URL in the site configuration to the app's public https
address.
