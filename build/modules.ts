/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-04-26 11:03:54
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { build } from "vite";

import * as utils from "../utils";

function getOutputConfig(format: "es" | "cjs"): Record<string, any> {
	return {
		format,
		dir: `./dist/${format == "es" ? "es" : "lib"}`,
		preserveModules: true,
		preserveModulesRoot: "",
		exports: "named",
		globals: {
			vue: "Vue",
			"@vue/shared": "@vue/shared",
			"@element-plus/icons-vue": "iconsVue",
			"element-plus": "Element-Plus",
		},
		assetFileNames: ({ name }: { name: string }) => {
			return name.endsWith(".css") ? "src/[name].css" : "";
		},
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
		esbuild: {
			pure: ["console.log", "debugger"],
		},
		build: {
			target: "es2018",
			outDir: "dist",
			emptyOutDir: true,
			minify: "esbuild",
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
				output: [getOutputConfig("es"), getOutputConfig("cjs")],
			},
		},
		plugins: [Vue(), VueJsx()],
	});
};
