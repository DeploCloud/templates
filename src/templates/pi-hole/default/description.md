Pi-hole is a network-wide DNS filter with a web administration interface. Its configuration and
DNS data are persistent.

DNS is published directly on the server's standard **TCP and UDP port 53**. That host port must be
free before deployment and can be used by only one DNS service on a server. A local resolver such
as `systemd-resolved` may already be using it; configure that resolver to release port 53 or deploy
Pi-hole on another server. Changing the host port means clients can no longer use the standard DNS
endpoint without additional configuration.

Use the generated domain for the web interface and point clients at this server's DNS address.
