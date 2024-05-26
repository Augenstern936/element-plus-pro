/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-05-26 18:05:39
 */
import { glob } from 'glob';
import { build } from 'tsup';
import { generateExternal } from './utils';

export default async () => {
	return build({
		entry: ['src/**/*.ts', 'src/**/*.tsx'],
		outDir: './es',
		silent: true,
		//忽略打包文件
		external: generateExternal({ full: true }),
		dts: {
			entry: await glob(['src/*.{ts,tsx}', 'src/components/*.{ts,tsx}']),
			only: true,
			compilerOptions: {
				moduleResolution: 'node',
				jsx: 'preserve',
			},
		},
	});
};
