/*
 * @Description:
 * @Date: 2024-04-22 10:43:19
 * @LastEditTime: 2024-04-24 16:17:48
 */
const esbuild = require("esbuild");
// const VueJsx = require("@kbeaver/esbuild-plugin-vue3tsx");
const Vue = require("esbuild-plugin-vue3");

esbuild.build({
	entryPoints: ["src/**"],
	format: "esm",
	bundle: false,
	outdir: "./esbuild",
	plugins: [Vue()],
});
