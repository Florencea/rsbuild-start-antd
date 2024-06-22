import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import { join } from "node:path";
import tailwindcss from "tailwindcss";

const {
  PORT = "3000",
  PROXY_SERVER = "http://localhost:3000",
  PUBLIC_BASEPATH = "/",
  PUBLIC_TITLE = "",
  PUBLIC_FAVICON = "favicon.ico",
  PUBLIC_ELEMENT_ROOT = "root",
  PUBLIC_THEME_COLOR_PRIMARY = "",
  PUBLIC_API_PREFIX = "/api",
} = process.env;

export default defineConfig({
  server: {
    port: parseInt(PORT),
    strictPort: true,
    proxy: {
      [join(PUBLIC_BASEPATH, PUBLIC_API_PREFIX)]: {
        target: PROXY_SERVER,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [pluginReact()],
  html: {
    title: PUBLIC_TITLE,
    appIcon: PUBLIC_FAVICON,
    favicon: PUBLIC_FAVICON,
    meta: {
      description: PUBLIC_TITLE,
      "theme-color": PUBLIC_THEME_COLOR_PRIMARY,
    },
    mountId: PUBLIC_ELEMENT_ROOT,
  },
  output: {
    assetPrefix: PUBLIC_BASEPATH,
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss()],
      },
    },
  },
});
