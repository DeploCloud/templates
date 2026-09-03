Pi-hole with its optional DHCP server capability. Its configuration and DNS data are persistent.

DNS is published directly on the server's standard **TCP and UDP port 53**. That host port must be
free before deployment and can be used by only one DNS service on a server. The DHCP service also
publishes **UDP port 67**, which must be free and cannot be shared with another DHCP server. A local
resolver such as `systemd-resolved` may already be using port 53; configure it to release the port
or deploy Pi-hole on another server. Changing these host ports requires additional client or network
configuration.

After deployment, configure the DHCP range in the Pi-hole web interface and ensure no other DHCP
server is active on the network.
