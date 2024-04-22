/*
 * @Description:
 * @Date: 2024-04-22 10:43:19
 * @LastEditTime: 2024-04-22 14:24:14
 */
const esbuild = require("esbuild");

esbuild.build({
	entryPoints: ["src/**"],
	format: "esm",
	bundle: false,
	outdir: "./esbuild",
});
