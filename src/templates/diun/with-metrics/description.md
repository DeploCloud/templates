Diun watches Docker images and reports when newer versions are available in
their registries.

This variant also enables Diun's Prometheus-compatible `/metrics` endpoint and
exposes it through the generated domain for a metrics scraper. It keeps the
notification state in a persistent volume; configure a notification provider
and choose which containers Diun monitors.
