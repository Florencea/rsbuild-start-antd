import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: process.env.PUBLIC_TITLE,
    appIcon: process.env.PUBLIC_FAVICON,
    favicon: process.env.PUBLIC_FAVICON,
    meta: {
      description: `${process.env.PUBLIC_TITLE}`,
      "theme-color": `${process.env.PUBLIC_THEME_COLOR_PRIMARY}`,
    },
    mountId: `${process.env.PUBLIC_ELEMENT_ROOT}`,
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss()],
      },
    },
  },
});
