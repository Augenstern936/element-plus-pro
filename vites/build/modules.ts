import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import path, { resolve } from "path";
import copy from "rollup-plugin-copy";
import { build } from "vite";

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
			cssCodeSplit: false,
			//压缩
			minify: "terser",
			lib: {
				entry: entry,
				name: "dist",
			},
			terserOptions: {
				//生产环境不要日志，去掉console,debugger
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
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
						assetFileNames(assetInfo: any) {
							//文件名称
							if (assetInfo.name.endsWith(".css")) {
								return "src/style/[name].css";
							}
							//剩余资源文件
							return "";
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
						assetFileNames(assetInfo: any) {
							//文件名称
							if (assetInfo.name.endsWith(".css")) {
								return "src/style/[name].css";
							}
							//剩余资源文件
							return "";
						},
					},
				],
			},
		},
		plugins: [
			Vue(),
			VueJsx(),
			// cssInjectedByJsPlugin({
			// 	topExecutionPriority: false,
			// 	// jsAssetsFilterFunction: ({ fileName }) => {
			// 	// 	if (baseDirName === "components") {
			// 	// 		return true;
			// 	// 	}
			// 	// 	return fileName == `${componentName}.js` || fileName == `${componentName}.mjs`;
			// 	// },
			// }),
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
