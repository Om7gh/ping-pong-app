import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import alias from "@rollup/plugin-alias";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRootDir = resolve(__dirname);

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/build/" : "/",

  build: {
    sourcemap: mode !== "production",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          vendor: ["lodash", "axios"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  esbuild: {
    pure: mode === "production" ? ["console.log", "debugger"] : [],
  },

  plugins: [
    tailwindcss(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDir, "./src"),
        },
        {
          find: "@pages",
          replacement: resolve(projectRootDir, "./src/pages"),
        },
        {
          find: "@utils",
          replacement: resolve(projectRootDir, "./src/utils"),
        },
        {
          find: "@layouts",
          replacement: resolve(projectRootDir, "./src/components/layout"),
        },
        {
          find: "@ui",
          replacement: resolve(projectRootDir, "./src/components/ui"),
        },
        {
          find: "@routers",
          replacement: resolve(projectRootDir, "./src/routers/"),
        },
        {
          find: "@assets",
          replacement: resolve(projectRootDir, "./src/assets"),
        },
      ],
    }),

    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            { displayName: true, fileName: false },
          ],
        ],
      },
    }),

    mode === "analyze" &&
      visualizer({
        open: true,
        filename: "bundle-analysis.html",
        gzipSize: true,
        brotliSize: true,
      }),

    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ].filter(Boolean),

  server: {
    port: 3000,
    open: true,
    cors: true,
    hmr: {
      overlay: false,
    },
  },

  preview: {
    port: 3000,
  },
}));
