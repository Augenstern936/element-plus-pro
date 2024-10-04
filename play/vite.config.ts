import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, loadEnv } from "vite";
import { createAutoInjectCssPlugin, ElementPlusResolver } from "vite-plugin-auto-inject-css";


export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      open: true,
      host: true,
      https: !!env.https
    },
    plugins: [Vue(), VueJsx({}), createAutoInjectCssPlugin({
      mode: "peerDependencies",
      resolvers: [
        ElementPlusResolver()
      ]
    }),]
  };
});
