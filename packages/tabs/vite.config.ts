import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig(async ({mode}) => {
    return {
        build: {
            target: "es2018",
            //打包后文件目录
            outDir: "dist",
            //压缩
            minify: false,
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue文件
                external: ["vue", "element-plus", "@element-plus/icons-vue"],
                output: {
                    globals: {
                        vue: "Vue",
                        "@element-plus/icons-vue": "iconsVue",
                        "element-plus": "Element-Plus"
                    },
                    dir: "dist",
                }
            },
            lib: {
                entry: "./index.ts",
                name: "pro-tabs",
                fileName: "index",
                formats: ["es", "umd", "cjs"]
            },
        },
        plugins: [
            Vue(),
            VueJsx(),
            cssInjectedByJsPlugin(),
            dts({outDir: "./dist/types"}),
        ]
    }
})