/*
 * @Description:
 * @Date: 2024-05-21 14:04:02
 * @LastEditTime: 2024-05-22 13:27:02
 */
import { resolve } from "path";
import { getPackageDependencies } from "./pkg";

export const generateExternal = (options: { full: boolean }) => {
	const cwd = process.cwd();

	const { dependencies: rootDependencies, devDependencies } = getPackageDependencies(
		resolve(__dirname, "..", "..", "package.json")
	);

	const { dependencies: componentDependencies, peerDependencies } = getPackageDependencies(
		resolve(cwd, "package.json")
	);

	return (() => {
		const packages: string[] = [...peerDependencies];
		if (!options.full) {
			packages.push("@vue", ...rootDependencies, ...devDependencies, ...componentDependencies);
		}
		return [...new Set(packages)];
	})();
};
