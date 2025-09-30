import { join } from "path";
import pkg from "./package.json";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  noPublicDir: true,
  srcDir: "./src",
  runtimeConfig: {
    version: pkg.version
  },
  external: ["jose"],
  alias: {
    "@": join(__dirname, "src")
  }
});
