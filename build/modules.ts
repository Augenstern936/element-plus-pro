/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-04-24 18:38:33
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { build } from "vite";

import * as utils from "./utils";

const globals = {
	vue: "Vue",
	"@vue/shared": "@vue/shared",
	"@element-plus/icons-vue": "iconsVue",
	"element-plus": "Element-Plus",
};

function getOutputConfig(format: "es" | "cjs"): Record<string, any> {
	const assetFileNames = (assetInfo: any) => {
		//文件名称
		if (assetInfo.name.endsWith(".css")) {
			return "src/style/[name].css";
		}
		//剩余资源文件
		return assetInfo;
	};

	return {
		format,
		dir: `./dist/${format == "es" ? "es" : "lib"}`,
		preserveModules: true,
		preserveModulesRoot: "",
		exports: "named",
		globals,
		assetFileNames,
	};
}

export const buildModules = async () => {
	const cwd = process.cwd();

	const baseDirName = path.basename(cwd);

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
				output: [getOutputConfig("es"), getOutputConfig("cjs")],
			},
		},
		plugins: [Vue(), VueJsx()],
	});
};
