import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import copy from 'rollup-plugin-copy';
import path, { resolve } from "path";

const globals = {
    vue: "Vue",
    '@vue/shared': '@vue/shared',
    "@element-plus/icons-vue": "iconsVue",
    "element-plus": "Element-Plus"
}

export default function () {

    const cwd = process.cwd();

    const baseDirName = path.basename(cwd);

    const pkgName = `pro-${baseDirName}`;

    const outputRoot = resolve(__dirname, "..", "dist");

    const esOutputDir = `${outputRoot}/${pkgName}/es`;

    const libOutputDir = `${outputRoot}/${pkgName}/lib`;

    const currPkgDir = resolve(outputRoot, pkgName);

    console.log(resolve(cwd, './package.json'))
    console.log(currPkgDir)

    return {
        build: {
            target: "es2018",
            //打包后文件目录
            outDir: pkgName,
            //压缩
            minify: false,
            cssCodeSplit: false,
            lib: {
                entry: [resolve(cwd, 'src/index.ts')],
                name: pkgName,
            },
            rollupOptions: {
                //忽略打包vue文件
                external: ["vue", "@vue/shared", "element-plus", "@element-plus/icons-vue", "@element-plus/pro-utils"],
                output: [
                    {
                        format: "es",
                        dir: esOutputDir,
                        entryFileNames: "[name].mjs",
                        preserveModules: false,
                        exports: "named",
                        globals
                    },{
                        format: "cjs",
                        dir: libOutputDir,
                        entryFileNames: "[name].js",
                        preserveModules: false,
                        exports: "named",
                        globals
                    }
                ]
            }
        },
        plugins: [
            Vue(),
            VueJsx(),
            cssInjectedByJsPlugin(),
            copy({
                targets: [
                  { src: resolve(cwd, './package.json'), dest: currPkgDir },
                  { src: resolve(cwd, './README.md'), dest: currPkgDir }, 
                ]
            }),
            dts({
                entryRoot: "./src",
                outDir: [esOutputDir, libOutputDir],
                tsConfigFilePath: "../tsconfig.json"
            })
        ]
    }
}
