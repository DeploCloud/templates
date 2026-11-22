Deploys the QuickChart image API, which turns a Chart.js config passed in the URL or a POST body into a PNG, SVG or PDF chart, serves QR codes on /qr and renders Graphviz diagrams through /chart with cht=gv.
The service is stateless: nothing is stored, so no volume is needed.
There is no login, so anyone who can reach the URL can render charts and run the JavaScript a config contains; keep the address private.
By default the server reports anonymous chart and QR counts to quickchart.io every 12 hours; the DISABLE_TELEMETRY environment variable turns this off.
