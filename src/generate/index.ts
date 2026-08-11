import { generate } from "./generate.ts";
import { consola } from "consola";

try {
  await generate();
} catch (error) {
  consola.error("Generation failed");
  consola.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
