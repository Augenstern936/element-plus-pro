/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-08-28 15:18:59
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { basename } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { build, PluginOption } from "vite";
import CssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import Dts from "vite-plugin-dts";
// import { libInjectCss } from "vite-plugin-lib-inject-css";
import { generateExternal, getEntry, getOutputConfig } from "./utils";

export default async () => {
  const preserveModules = basename(process.cwd()) == "components" ? false : true;

  console.log(getEntry(), "111111");

  return await build({
    esbuild: {
      pure: ["console.log", "debugger"]
    },
    build: {
      target: "es2018",
      emptyOutDir: true,
      //minify: "esbuild",
      cssCodeSplit: true,
      copyPublicDir: true,
      lib: {
        entry: getEntry() //"src/index.ts"
      },
      rollupOptions: {
        treeshake: true,
        //忽略打包文件
        external: generateExternal({ full: false }),
        output: [getOutputConfig("es", preserveModules), getOutputConfig("cjs", preserveModules)]
      }
    },
    plugins: [
      Vue(),
      VueJsx(),
      //libInjectCss(),
      visualizer() as PluginOption,
      Dts({
        entryRoot: "./src",
        outDir: "./es",
        insertTypesEntry: true,
        compilerOptions: {
          jsx: 1,
          importHelpers: true,
          moduleResolution: 2
        }
      }),
      CssInjectedByJsPlugin({ topExecutionPriority: false, relativeCSSInjection: true })
    ],
    optimizeDeps: {
      exclude: ["vue-demi"]
    }
  });
};
