import { resolve } from 'path';

/*
 * @Description:
 * @Date: 2024-05-21 14:03:12
 * @LastEditTime: 2024-05-26 12:42:12
 */
export * from './pkg';
export * from './rollup';

export function getOutputConfig(format: 'es' | 'cjs', preserveModules: boolean): Record<string, any> {
	return {
		format,
		dir: format == 'es' ? 'es' : 'lib',
		sourcemap: true,
		preserveModules: true,
		preserveModulesRoot: resolve(process.cwd(), 'src'),
		exports: format === 'cjs' ? 'named' : undefined,
		entryFileNames: `[name].${format == 'es' ? 'mjs' : 'js'}`,
	};
}

export function toGreatHump(str: string) {
	return str
		.replace(/^\w/g, (match) => {
			return match.toUpperCase();
		})
		.replace(/-(\w)/g, ($0, $1) => {
			return $1.toUpperCase();
		});
}
