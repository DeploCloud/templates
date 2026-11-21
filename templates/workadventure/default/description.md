WorkAdventure is a collaborative virtual office presented as a 16-bit RPG world: users walk an avatar around a map and start audio and video calls by moving close to each other.
This template deploys the play, back, map-storage and icon services plus Redis, routed through a small internal Caddy proxy on a single domain.
Uploaded maps persist in the map-storage volume and scripting variables persist in Redis.
New visitors land on the public starter office map set by START_ROOM_URL; upload your own maps from the map starter kit to https://your-domain/map-storage/ with MAP_STORAGE_UPLOAD_TOKEN, browse them there with MAP_STORAGE_USER and MAP_STORAGE_PASSWORD, and open one at https://your-domain/~/your-map.wam.
