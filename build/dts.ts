/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-30 14:07:56
 */
import { glob } from "glob";
import { build } from "tsup";
import { generateExternal } from "./utils";

export default async () => {
	return build({
		entry: ["src/**/*.{ts,tsx}"],
		outDir: "./es",
		//忽略打包文件
		external: generateExternal({ full: true }),
		dts: {
			entry: await glob(["src/*.{ts,tsx}", "src/components/*.{ts,tsx}"]),
			only: true,
			compilerOptions: {
				moduleResolution: "node",
				jsx: "preserve",
			},
		},
	});
};
