import { defineConfig } from "tsup";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  target: "node20",
  bundle: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: Object.keys(pkg.dependencies),
});
