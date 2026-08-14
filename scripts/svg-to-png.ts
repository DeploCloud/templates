/**
 * Rasterise one SVG to PNG. Runs as its own process on purpose: resvg panics
 * (and aborts the runtime) on a handful of real-world SVGs, so the importer
 * spawns this and treats a non-zero exit as "this logo could not be converted"
 * instead of dying halfway through the catalog.
 *
 *   bun run scripts/svg-to-png.ts <in.svg> <out.png>
 */
import { Resvg } from "@resvg/resvg-js";

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error("usage: bun run scripts/svg-to-png.ts <in.svg> <out.png>");
  process.exit(1);
}

const png = new Resvg(await Bun.file(input).text(), {
  fitTo: { mode: "width", value: 256 },
})
  .render()
  .asPng();
await Bun.write(output, png);
