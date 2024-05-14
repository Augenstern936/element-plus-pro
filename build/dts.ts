/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-14 13:48:03
 */
import { glob } from "glob";
import { basename } from "path";
import { build } from "tsup";

export default async () => {
	const baseDirName = basename(process.cwd());

	const entrys = await glob("src/**/*.{ts,tsx}");

	console.log(entrys);

	return await build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: `./es${baseDirName != "components" ? "/src" : ""}`,
		dts: {
			entry: entrys.filter((_, index) => index < 3).map((url) => url.replace("\\", "/")),
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
