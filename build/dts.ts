/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-04-26 15:11:48
 */
import Vue3 from "esbuild-plugin-vue3";
import SassPlugin from "esbuild-sass-plugin";
import { resolve } from "path";
import { build } from "tsup";

export default async () => {
	return await build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: "./dist/es/src",
		target: "es2018",
		format: ["esm"],
		bundle: true,
		splitting: false,
		jsxFactory: "h",
		jsxFragment: "Fragment",
		inject: [resolve(__dirname, "jsxFactory.ts")],
		esbuildPlugins: [Vue3() as any, SassPlugin({ type: "css" })],
		dts: {
			entry: "src/index.ts",
			only: false,
			compilerOptions: {
				moduleResolution: "node",
				jsx: "preserve",
			},
		},
		loader: {
			".vue": "ts",
		},
		//plugins: [Vue3()],
		external: [
			"vue",
			"@element-plus/icons-vue",
			"@element-plus/pro-utils",
			"@element-plus/pro-tabs",
			"@element-plus/pro-button",
			"@element-plus/pro-table",
			"@element-plus/pro-search-bar",
			"@element-plus/pro-center-container",
		],
	});
};
