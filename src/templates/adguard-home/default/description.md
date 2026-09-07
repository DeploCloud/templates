AdGuard Home is a network-wide DNS server that blocks advertisements and trackers. This template
keeps its work and configuration directories on persistent volumes, so redeploying the stack does
not reset the service.

DNS is published directly on the server's standard **TCP and UDP port 53**. That host port must be
free before deployment and can be used by only one DNS service on a server. A local resolver such
as `systemd-resolved` may already be using it; configure that resolver to release port 53 or deploy
AdGuard Home on another server. Changing the host port means clients can no longer use the standard
DNS endpoint without additional configuration.

The web administration interface listens on **container port 3000** and is available through the
generated HTTPS domain. Open that domain for the first-run setup, then point the devices or network
you want to filter at this server's DNS address.
