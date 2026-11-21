Kener is a status page with built-in monitors, incident management and alerting. This variant runs
the Kener server with a PostgreSQL database, which upstream recommends for production, plus the
Redis instance it requires for background jobs. Monitors, incidents, settings and uploaded images
live in PostgreSQL, and both PostgreSQL and Redis keep their data on persistent volumes. Open
`/account/signin` after the first start to create the administrator account, then set the Site URL in
the site configuration to the app's public https address.
