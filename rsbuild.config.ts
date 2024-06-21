import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./index.html",
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss()],
      },
    },
  },
});
