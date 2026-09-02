# Jellyfin Hardware Acceleration

Jellyfin is a self-hosted media server for organizing and streaming personal
movies, shows, music and photos.

This variant exposes the host Linux DRI device to enable hardware-accelerated
transcoding. It can run only on a Linux host that provides `/dev/dri` and grants
the container access to a compatible GPU. On hosts without that device, use the
Default variant.
