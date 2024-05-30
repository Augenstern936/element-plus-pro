/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-05-30 14:12:16
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { basename } from "path";
import { build } from "vite";
import CssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import Dts from "vite-plugin-dts";
import { generateExternal, getOutputConfig } from "./utils";

export default async () => {
	const baseDirName = basename(process.cwd());

	const preserveModules = baseDirName == "components" ? false : true;

	return await build({
		esbuild: {
			//pure: ['console.log', 'debugger'],
		},
		build: {
			target: "es2018",
			emptyOutDir: true,
			minify: "esbuild",
			cssCodeSplit: true,
			copyPublicDir: true,
			lib: {
				entry: "src/index.ts",
			},
			rollupOptions: {
				treeshake: true,
				//忽略打包文件
				external: generateExternal({ full: false }),
				output: [getOutputConfig("es", preserveModules), getOutputConfig("cjs", preserveModules)],
				plugins: [],
			},
		},
		plugins: [
			Vue(),
			VueJsx(),
			Dts({
				entryRoot: "./src",
				outDir: "./es",
				insertTypesEntry: true,
				compilerOptions: {
					jsx: 1,
					importHelpers: true,
					moduleResolution: 2,
				},
			}),
			CssInjectedByJsPlugin({ topExecutionPriority: false, relativeCSSInjection: true }),
		],
	});
};
