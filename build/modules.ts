/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-09-03 17:52:08
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { basename } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import type { BuildOptions } from "vite";
import { build, PluginOption } from "vite";
import Dts from "vite-plugin-dts";
import { createStyleImportPlugin, ElementPlusResolve } from "vite-plugin-style-import";
import AutoImportStyle from "./plugins/vite-plugins-auto-import-style";
import { generateExternal, getEntry, getOutputConfig } from "./utils";

export default async () => {
  const preserveModules = basename(process.cwd()) == "components" ? false : true;
  return (await build({
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
        entry: getEntry(preserveModules)
      },
      rollupOptions: {
        //treeshake: false,
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
      AutoImportStyle({}),
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
      //CssInjectedByJsPlugin({ topExecutionPriority: false, relativeCSSInjection: true }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()]
      })
    ],
    optimizeDeps: {
      exclude: ["vue-demi"]
    }
  })) as BuildOptions;
};
