Deploys OvenMediaEngine, a sub-second latency live streaming server, with Low-Latency HLS, HLS and WebRTC signaling served on the domain root and its REST API under /v1.
The server configuration is a mounted Server.xml with one live application named app, and the log files persist in a named volume.
Only HTTP is routed, so streams can be pulled from RTSP or OVT sources through the REST API, authenticated with the OME_API_ACCESS_TOKEN value as user:password.
Pushing from OBS or other encoders over RTMP, SRT or WebRTC, and playing back over WebRTC, need those ports published on the service, plus OME_HOST_IP set to the server's public IP for WebRTC.
