/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-04-24 18:04:39
 */

import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/*.ts", "src/**/*.tsx"],
	outDir: "./dist/es/src",
	dts: {
		entry: "src/typing.ts",
		only: true,
		compilerOptions: {
			moduleResolution: "node",
			jsx: "preserve",
		},
	},
});
