import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import path, { resolve } from "path";
import copy from "rollup-plugin-copy";
import { build } from "vite";

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import * as utils from "./utils";

const globals = {
	vue: "Vue",
	"@vue/shared": "@vue/shared",
	"@element-plus/icons-vue": "iconsVue",
	"element-plus": "Element-Plus",
};

export const buildModules = async () => {
	const cwd = process.cwd();

	const baseDirName = path.basename(cwd);

	const pkgName = `pro-${baseDirName}`;

	const outputRoot = resolve(__dirname, "..", "..", "dist");

	const currPkgDir = resolve(outputRoot, pkgName);

	const componentName = utils.toGreatHump(baseDirName);

	const componentSuffix = componentName == "Button" ? ".vue" : ".tsx";

	const componentsPath = `src/${componentName}${componentSuffix}`;

	const entry = baseDirName === "components" ? "src/index.ts" : ["src/index.ts", componentsPath];

	return await build({
		build: {
			target: "es2018",
			//打包后文件目录
			outDir: "dist",
			emptyOutDir: true,
			//压缩
			minify: true,
			lib: {
				entry: entry,
				name: "dist",
			},
			rollupOptions: {
				//忽略打包文件
				external: [
					"vue",
					"@vue/shared",
					"element-plus",
					"@element-plus/icons-vue",
					"@element-plus/pro-utils",
					"@element-plus/pro-tabs",
					"@element-plus/pro-button",
					"@element-plus/pro-table",
					"@element-plus/pro-search-bar",
					"@element-plus/pro-center-container",
				],
				output: [
					{
						format: "es",
						dir: "./dist/es",
						entryFileNames: "[name].mjs",
						preserveModules: true,
						preserveModulesRoot: "",
						exports: "named",
						globals,
						sourcemapIgnoreList: (relativeSourcePath) => {
							// 将忽略所有路径中含有 node_modules 的文件
							return relativeSourcePath.includes("node_modules");
						},
					},
					{
						format: "cjs",
						dir: "./dist/lib",
						entryFileNames: "[name].js",
						preserveModules: true,
						preserveModulesRoot: "",
						exports: "named",
						globals,
						sourcemapIgnoreList: (relativeSourcePath) => {
							// 将忽略所有路径中含有 node_modules 的文件
							return relativeSourcePath.includes("node_modules");
						},
					},
				],
			},
		},
		plugins: [
			Vue(),
			VueJsx(),
			cssInjectedByJsPlugin({
				topExecutionPriority: false,
				// jsAssetsFilterFunction: ({ fileName }) => {
				// 	if (baseDirName === "components") {
				// 		return true;
				// 	}
				// 	return fileName == `${componentName}.js` || fileName == `${componentName}.mjs`;
				// },
			}),
			dts({
				entryRoot: "src/",
				outDir: ["dist/es/src", "dist/lib/src"],
				tsconfigPath: "../../tsconfig.json",
			}),
			copy({
				targets: [
					{ src: "./dist/*", dest: resolve(outputRoot, pkgName) },
					{ src: "./package.json", dest: currPkgDir },
					{ src: "./README.md", dest: currPkgDir },
				],
			}),
		],
	});
};
