/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-04-24 23:26:57
 */

import { build } from 'tsup';

export default async () => {
	return await build({
		entry: ['src/**/*.ts', 'src/**/*.tsx'],
		outDir: './dist/es/src',
		dts: {
			entry: 'src/typing.ts',
			only: true,
			compilerOptions: {
				moduleResolution: 'node',
				jsx: 'preserve',
			},
		},
	});
};
