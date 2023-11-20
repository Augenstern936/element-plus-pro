import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
//import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import copy from 'rollup-plugin-copy';

// const globals = {
//     vue: "Vue",
//     '@vue/shared': '@vue/shared',
//     "@element-plus/icons-vue": "iconsVue",
//     "element-plus": "Element-Plus"
// }

// export default defineConfig(async ({mode}): Promise<Record<string, any>> => {
//     return {
//         build: {
//             target: "es2018",
//             //打包后文件目录
//             outDir: "pro-button",
//             //压缩
//             minify: false,
//             cssCodeSplit: false,
//             terserOptions:{
//                 compress:{
//                     drop_console: true
//                 }
//             },
//             lib: {
//                 entry: ["./src/index.ts", "./src/Button.tsx"],
//                 name: 'pro-button',
//             },
//             rollupOptions: {
//                 //忽略打包vue文件
//                 external: ["vue", "@vue/shared", "element-plus", "@element-plus/icons-vue", "@element-plus/pro-utils"],
//                 output: [
//                     {
//                         format: "es",
//                         dir: "./pro-button/es",
//                         entryFileNames: "[name].mjs",
//                         preserveModules: false,
//                         exports: "named",
//                         globals
//                     },{
//                         format: "cjs",
//                         dir: "./pro-button/lib",
//                         entryFileNames: "[name].js",
//                         preserveModules: false,
//                         exports: "named",
//                         globals
//                     }
//                 ]
//             }
//         },
//         plugins: [
//             Vue(),
//             VueJsx(),
//             //cssInjectedByJsPlugin(),
//             copy({
//                 targets: [
//                   { src: './package.json', dest: './pro-button' },
//                   { src: './README.md', dest: './pro-button' }, 
//                 ]
//             }),
//             // dts({
//             //     entryRoot: "./src",
//             //     outDir: ["./pro-button/es", "./pro-button/lib"],
//             //     tsConfigFilePath: "../../tsconfig.json"
//             // }),
//         ]
//     }
// })

import baseCongfig from "../../vites/build.base.config";

export default defineConfig(async ({command, mode}): Promise<any> => {
    
    return baseCongfig();
});