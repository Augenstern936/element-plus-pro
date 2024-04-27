/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-04-27 17:49:23
 */
// import Vue3 from "esbuild-plugin-vue3";
// import SassPlugin from "esbuild-sass-plugin";
// import { resolve } from "path";
import { build } from "tsup";

export default () => {
	return build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: "./dist/es/src",
		format: "esm",
		// target: "es2018",
		// bundle: false,
		// splitting: false,
		// legacyOutput: true,
		// jsxFactory: "h",
		// jsxFragment: "Fragment",
		// inject: [resolve(__dirname, "jsxFactory.ts")],
		// esbuildPlugins: [Vue3() as any, SassPlugin()],
		dts: {
			entry: "src/index.ts",
			only: true,
			compilerOptions: {
				moduleResolution: "node",
				jsx: "preserve",
			},
		},
		// external: [
		// 	"vue",
		// 	"element-plus",
		// 	"@element-plus/icons-vue",
		// 	"@element-plus/pro-utils",
		// 	"@element-plus/pro-tabs",
		// 	"@element-plus/pro-button",
		// 	"@element-plus/pro-table",
		// 	"@element-plus/pro-field",
		// 	"@element-plus/pro-search-bar",
		// 	"@element-plus/pro-center-container",
		// ],
	});
};
