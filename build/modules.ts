/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-09-13 17:22:07
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { basename } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { build, PluginOption } from "vite";
import { createAutoInjectCssPlugin, ElementPlusResolver } from "vite-plugin-auto-inject-css";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import Dts from "vite-plugin-dts";
import { generateExternal, getEntry, getOutputConfig } from "./utils";

export default async () => {
  const preserveModules = basename(process.cwd()) == "components" ? false : true;
  return await build({
    esbuild: {
      pure: ["console.log", "debugger"]
    },
    build: {
      target: "es2018",
      emptyOutDir: true,
      cssCodeSplit: true,
      copyPublicDir: true,
      lib: {
        entry: getEntry(preserveModules)
      },
      rollupOptions: {
        //忽略打包文件
        external: generateExternal({ full: false }),
        output: [getOutputConfig("es", preserveModules), getOutputConfig("cjs", preserveModules)]
      }
    },
    plugins: [
      Vue(),
      VueJsx(),
      visualizer() as PluginOption,
      cssInjectedByJsPlugin(),
      createAutoInjectCssPlugin({
        mode: "peerDependencies",
        resolvers: [ElementPlusResolver()]
      }),
      Dts({
        entryRoot: "./src",
        outDir: "./es",
        insertTypesEntry: true,
        compilerOptions: {
          jsx: 1,
          importHelpers: true,
          moduleResolution: 2
        }
      })
    ],
    optimizeDeps: {
      exclude: ["vue-demi"]
    }
  });
};
