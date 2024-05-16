/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-05-16 10:39:25
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { build } from "vite";
import CssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import * as utils from "../utils";

function getOutputConfig(format: "es" | "cjs", preserveModules: boolean): Record<string, any> {
	return {
		format,
		dir: `./${format == "es" ? "es" : "lib"}`,
		preserveModules,
		preserveModulesRoot: "",
		sourcemap: true,
		exports: "named",
	};
}

export default async () => {
	const baseDirName = path.basename(process.cwd());

	const componentName = utils.toGreatHump(baseDirName);

	const componentSuffix = componentName == "Button" ? ".vue" : ".tsx";

	const componentsPath = `src/${componentName}${componentSuffix}`;

	const entry = baseDirName == "components" ? "src/index.ts" : ["src/index.ts", componentsPath];

	const preserveModules = baseDirName == "components" ? false : true;

	return await build({
		esbuild: {
			pure: ["console.log", "debugger"],
		},
		build: {
			target: "es2018",
			outDir: "dist",
			emptyOutDir: true,
			minify: "esbuild",
			cssCodeSplit: true,
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
					"@element-plus/pro-field",
					"@element-plus/pro-button",
					"@element-plus/pro-table",
					"@element-plus/pro-search-bar",
					"@element-plus/pro-center-container",
				],
				output: [getOutputConfig("es", preserveModules), getOutputConfig("cjs", preserveModules)],
			},
		},
		plugins: [Vue(), VueJsx(), CssInjectedByJsPlugin({ topExecutionPriority: true, relativeCSSInjection: true })],
	});
};
