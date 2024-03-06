import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import path, { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import { build } from 'vite';
import { tsxAutoProps } from 'vite-plugin-tsx-auto-props';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import * as utils from './utils';

const globals = {
	vue: 'Vue',
	'@vue/shared': '@vue/shared',
	'@element-plus/icons-vue': 'iconsVue',
	'element-plus': 'Element-Plus',
};

export const buildModules = async () => {
	const cwd = process.cwd();

	const baseDirName = path.basename(cwd);

	const pkgName = `pro-${baseDirName}`;

	const outputRoot = resolve(__dirname, '..', '..', 'dist');

	const currPkgDir = resolve(outputRoot, pkgName);

	const componentName = utils.toGreatHump(baseDirName);

	const componentsPath = `src/${componentName}.tsx`;

	const entry = baseDirName === 'components' ? 'src/index.ts' : ['src/index.ts', componentsPath];

	return await build({
		build: {
			target: 'es2018',
			//打包后文件目录
			outDir: 'dist',
			emptyOutDir: true,
			//压缩
			minify: true,
			lib: {
				entry: entry,
				name: 'dist',
			},
			rollupOptions: {
				//忽略打包文件
				external: [
					'vue',
					'@vue/shared',
					'element-plus',
					'@element-plus/icons-vue',
					'@element-plus/pro-utils',
					'@element-plus/pro-tabs',
					'@element-plus/pro-button',
					'@element-plus/pro-table',
					'@element-plus/pro-search-bar',
					'@element-plus/pro-center-container',
				],
				output: [
					{
						format: 'es',
						dir: './dist/es',
						entryFileNames: '[name].mjs',
						preserveModules: false,
						exports: 'named',
						globals,
					},
					{
						format: 'cjs',
						dir: './dist/lib',
						entryFileNames: '[name].js',
						preserveModules: false,
						exports: 'named',
						globals,
					},
				],
			},
		},
		plugins: [
			Vue(),
			// tsxAutoProps(),
			VueJsx(),
			cssInjectedByJsPlugin({
				topExecutionPriority: false,
				// jsAssetsFilterFunction: ({ fileName }) => {
				// 	if (baseDirName === 'components') {
				// 		return true;
				// 	}
				// 	return fileName == `${componentName}.js` || fileName == `${componentName}.mjs`;
				// },
			}),
			dts({
				entryRoot: './src',
				outDir: ['dist/es', 'dist/lib'],
				tsconfigPath: '../../tsconfig.json',
			}),
			copy({
				targets: [
					{ src: './dist/*', dest: resolve(outputRoot, pkgName) },
					{ src: './package.json', dest: currPkgDir },
					{ src: './README.md', dest: currPkgDir },
				],
			}),
		],
	});
};
