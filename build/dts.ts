/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-22 13:32:36
 */
import { glob } from "glob";
import { build } from "tsup";
import { generateExternal } from "./utils";

export default async () => {
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
		external: generateExternal({ full: true }),
	});
};
