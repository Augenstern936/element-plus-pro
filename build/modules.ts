/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-10-04 11:35:05
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { basename } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { build, PluginOption } from "vite";
import { createAutoInjectCssPlugin, ElementPlusResolver } from "vite-plugin-auto-inject-css";
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
      createAutoInjectCssPlugin({
        mode: "peerDependencies",
        resolvers: [
          ElementPlusResolver({
            inject: name => {
              if (name === "el-image") {
                return [`element-plus/theme-chalk/${name}.css`, `element-plus/theme-chalk/el-image-viewer.css`];
              }
              if (name === "el-tooltip") {
                return [`element-plus/theme-chalk/${name}.css`, `element-plus/theme-chalk/el-popper.css`];
              }
              if (name === "el-message-box") {
                return [`element-plus/theme-chalk/${name}.css`, `element-plus/theme-chalk/el-overlay.css`];
              }
              return `element-plus/theme-chalk/${name}.css`;
            }
          })
        ]
      }),
      Dts({
        entryRoot: "./src",
        outDir: "./es",
        insertTypesEntry: true,
        compilerOptions: {
          jsx: 1,
          strict: true,
          noImplicitAny: false,
          importHelpers: true,
          moduleResolution: 2,
          allowSyntheticDefaultImports: true
        }
      })
    ],
    optimizeDeps: {
      exclude: ["vue-demi"]
    }
  });
};
