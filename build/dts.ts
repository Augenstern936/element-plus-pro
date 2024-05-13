/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-13 18:53:45
 */
import { basename } from "path";
import { build } from "tsup";

export default () => {
	const baseDirName = basename(process.cwd());

	return build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: `./es${baseDirName != "components" ? "/src" : ""}`,
		dts: {
			entry: "src/index.ts",
			only: true,
			resolve: true,
			compilerOptions: {
				moduleResolution: "node",
				jsx: "preserve",
			},
		},
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
