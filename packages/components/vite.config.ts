import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import copy from 'rollup-plugin-copy';

const globals = {
    vue: "Vue",
    '@vue/shared': '@vue/shared',
    "@element-plus/icons-vue": "iconsVue",
    "element-plus": "Element-Plus"
}

export default defineConfig(async ({mode}) => {
    return {
        build: {
            target: "es2018",
            //打包后文件目录
            outDir: "pro-components",
            //压缩
            minify: false,
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue文件
                external: ["vue", "element-plus", "@element-plus/icons-vue", "@vue/shared", "css"],
                output: [
                    {
                        format: "es",
                        dir: "./pro-components/es",
                        entryFileNames: "[name].mjs",
                        preserveModules: false,
                        exports: "named",
                        globals
                    },{
                        format: "cjs",
                        dir: "./pro-components/lib",
                        entryFileNames: "[name].js",
                        preserveModules: false,
                        exports: "named",
                        globals
                    }
                ]
            },
            lib: {
                entry: "./index.ts",
            }
        },
        plugins: [
            Vue(),
            VueJsx(),
            //cssInjectedByJsPlugin(),
            copy({
                targets: [
                  { src: './package.json', dest: './pro-components' },
                  { src: './README.md', dest: './pro-components' }, 
                ]
            }),
            dts({
                entryRoot: "./src",
                outDir: ["./pro-components/es", "./pro-components/lib"],
                tsConfigFilePath: "../../tsconfig.json"
            })
        ]
    }
})