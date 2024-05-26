/*
 * @Description:
 * @Date: 2024-05-21 14:04:02
 * @LastEditTime: 2024-05-25 15:38:30
 */
import { resolve } from 'path';
import { getPackageDependencies } from './pkg';

export const generateExternal = (options: { full: boolean }) => {
	const { dependencies: rootDependencies } = getPackageDependencies(resolve(__dirname, '..', '..', 'package.json'));

	const { dependencies: componentDependencies, peerDependencies } = getPackageDependencies(
		resolve(process.cwd(), 'package.json')
	);

	return (() => {
		const packages: string[] = [...peerDependencies];
		if (!options.full) {
			packages.push('@vue', ...rootDependencies, ...componentDependencies);
		}

		return [...new Set(packages)];
	})();
};
