/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
<<<<<<< HEAD
 * @LastEditTime: 2024-08-30 22:08:38
=======
 * @LastEditTime: 2024-08-30 17:44:30
>>>>>>> 6f27c5aa473e2aa2beca7d6b3664aa48c4261a2a
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
import { build, PluginOption } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
//import CssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import Dts from "vite-plugin-dts";
import { generateExternal, getEntry, getOutputConfig } from "./utils";

export default async () => {
  const preserveModules = false; //basename(process.cwd()) == "components" ? false : true;

  console.log(getEntry(preserveModules), "entry");

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
        treeshake: true,
        external: generateExternal({ full: false }),
        output: [getOutputConfig("es", preserveModules), getOutputConfig("cjs", preserveModules)]
      }
    },
    plugins: [
      Vue(),
      VueJsx(),
      libInjectCss(),
      visualizer() as PluginOption,
      //CssInjectedByJsPlugin({ topExecutionPriority: false, relativeCSSInjection: true }),
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
