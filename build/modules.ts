/*
 * @Description:
 * @Date: 2024-04-24 17:52:21
 * @LastEditTime: 2024-05-22 13:38:17
 */
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { build } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { generateExternal, getOutputConfig, toGreatHump } from "./utils";

export default async () => {
	const baseDirName = path.basename(process.cwd());

	const componentName = toGreatHump(baseDirName);

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
				external: generateExternal({ full: true }),
				output: [getOutputConfig("es", preserveModules), getOutputConfig("cjs", preserveModules)],
			},
		},
		plugins: [Vue(), VueJsx(), cssInjectedByJsPlugin({ topExecutionPriority: false, relativeCSSInjection: true })],
	});
};
