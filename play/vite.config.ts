/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 19:08:13
 * @LastEditTime: 2025-01-03 09:46:52
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, loadEnv } from "vite";
import { createAutoInjectCssPlugin, ElementPlusResolver } from "vite-plugin-auto-inject-css";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
    server: {
      open: true,
      host: true,
      https: !!env.https
    },
    plugins: [
      Vue(),
      VueJsx({}),
      createAutoInjectCssPlugin({
        mode: "peerDependencies",
        resolvers: [ElementPlusResolver()]
      })
    ]
  };
});
