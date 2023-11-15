import { OutputOptions, rollup } from "rollup";
import glob from "fast-glob";
import { pkgRoot, excludeFiles, allComPkgBuildInputs } from "@element-plus/pro-build-utils";
import VueMacros from "unplugin-vue-macros/rollup"
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import { writeBundles } from "../utils/rollup";
import { buildConfigEntries, target } from "../configs";

export const buildModules = async () => {
    const input = excludeFiles(
        await glob('**/*.{js,ts,vue}', {
          cwd: pkgRoot,
          absolute: true,
          onlyFiles: true,
        })
    )
    const bundle = await rollup({
        input: [input[6], input[7]],
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
    });
    await writeBundles(
        bundle,
        buildConfigEntries.map(([module, config]): OutputOptions => {
          return {
            format: config.format,
            dir: config.output.path,
            exports: module === 'cjs' ? 'named' : undefined,
            preserveModules: true,
            preserveModulesRoot: allComPkgBuildInputs.button,
            sourcemap: true,
            entryFileNames: `[name].${config.ext}`,
          }
        })
    )
}