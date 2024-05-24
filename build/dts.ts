/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-23 11:34:28
 */
import { glob } from "glob";
import { build } from "tsup";
import { generateExternal } from "./utils";

export default async () => {
	const entrys = await glob("src/**/*.{ts,tsx}");

	return await build({
		entry: ["src/**/*.ts", "src/**/*.tsx"],
		outDir: "./es/src",
		treeshake: true,
		dts: {
			entry: entrys.filter((_, i) => i < 5),
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
