/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-08-27 22:50:04
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { basename } from "path";
import { build, PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
// import CssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import Dts from "vite-plugin-dts";
import { generateExternal, getOutputConfig } from "./utils";
import { glob } from "glob";

export default async () => {
  const preserveModules = basename(process.cwd()) == "components" ? false : true;
  const jsfiles = await glob("src/**", { ignore: "node_modules/**" });
  console.log(jsfiles, "jsfiles");
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
        entry: ["src/index.ts", "src/Button.vue"]
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
      libInjectCss(),
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
      })
      //CssInjectedByJsPlugin({ topExecutionPriority: false, relativeCSSInjection: true })
    ],
    optimizeDeps: {
      exclude: ["vue-demi"]
    }
  });
};
