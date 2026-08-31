Diun watches Docker images and reports when newer versions are available in
their registries.

This variant monitors the local Docker host, keeps its notification state in a
persistent volume and has no web interface or public domain. Configure a
notification provider to receive alerts, then use Docker labels or the
watch-by-default setting to choose which containers Diun monitors.
