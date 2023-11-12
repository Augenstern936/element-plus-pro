import { rollup } from "rollup";
import { allComPkgBuildInputs } from "@element-plus/pro-build-utils";
import VueMacros from "unplugin-vue-macros/rollup"
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { target } from "../configs";

export const buildModules = async () => {

    const bundle = await rollup({
        input: allComPkgBuildInputs.button,
        plugins: [
            VueMacros({
                setupComponent: false,
                setupSFC: false,
                plugins: {
                    vue: vue({isProduction: false}),
                    vueJsx: vueJsx()
                }
            }),
            nodeResolve({
                extensions: ['.mjs', '.js', '.json', '.ts'],
            }),
            commonjs(),
            esbuild({
                sourceMap: true,
                target,
                loaders: {
                  '.vue': 'ts',
                },
            })
        ],
        treeshake: false
    })
}