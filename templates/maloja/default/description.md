Maloja is a self-hosted scrobble database that records the music you play and turns it into charts and listening statistics. Scrobblers connect through its native API or any client that supports a custom ListenBrainz or GNU FM server.

Settings, the scrobble database, API keys, custom images and backups all live in a single persistent `/data` volume.

Log in with the generated admin password (`MALOJA_FORCE_PASSWORD`), then create one API key per scrobbler in the admin area. Previous scrobbles from Last.fm, Spotify or ListenBrainz exports can be imported by placing them in the import folder of the data volume.
