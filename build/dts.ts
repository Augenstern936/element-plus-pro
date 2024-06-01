/*
 * @Description:
 * @Date: 2024-04-24 11:32:17
 * @LastEditTime: 2024-06-01 00:12:29
 */
import { glob } from 'glob';
import { build } from 'tsup';
import { generateExternal } from './utils';

export default async () => {
	return build({
		entry: ['src/**/*.{ts,tsx}'],
		outDir: './es',
		//忽略打包文件
		external: generateExternal({ full: true }),
		dts: {
			entry: await glob(['src/*.{ts,tsx}']),
			only: true,
			compilerOptions: {
				moduleResolution: 'node',
				jsx: 'preserve',
			},
		},
	});
};
