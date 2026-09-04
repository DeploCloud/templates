Jellyfin is a self-hosted media server for organizing and streaming personal
movies, shows, music and photos.

This variant exposes `/dev/dri` from the host for hardware-accelerated
transcoding. It requires a Linux host with a compatible GPU, installed drivers,
and permission for the container to access the device. If `/dev/dri` is not
available, use the Default variant instead.
