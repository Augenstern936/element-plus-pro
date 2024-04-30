/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-04-30 13:46:18
 */
import Css from "esbuild-sass-plugin";
import { basename, resolve } from "path";
import { build } from "tsup";

export default () => {
	const baseDirName = basename(process.cwd());

	return build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: `./dist/es${baseDirName != "components" ? "/src" : ""}`,
		jsxFactory: "h",
		jsxFragment: "Fragment",
		inject: [resolve(__dirname, "jsxFactory.ts")],
		dts: {
			entry: "src/index.ts",
			only: false,
			compilerOptions: {
				moduleResolution: "node",
				jsx: "preserve",
			},
		},
		esbuildPlugins: [Css()],
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
	});
};
