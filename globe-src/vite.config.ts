import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "../globe",
    emptyOutDir: true,
    assetsInlineLimit: 0
  }
});
