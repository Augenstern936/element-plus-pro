/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-16 11:36:29
 */
import { glob } from "glob";
import { build } from "tsup";

export default async () => {
	//const baseDirName = basename(process.cwd());

	const entrys = await glob("src/**/*.{ts,tsx}");

	return await build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: "./es/src",
		dts: {
			entry: entrys.filter((_, index) => index < 6),
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
