import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      // include index.html (popup) and any extra script entry points
      input: {
        main: resolve(__dirname, "index.html"),
        contentScript: resolve(__dirname, "src/contentScript.js"),
        background: resolve(__dirname, "src/background.js")
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    },
    emptyOutDir: true
  }
});
