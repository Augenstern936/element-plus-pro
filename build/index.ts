/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-05-29 23:23:52
 */
import gulp from 'gulp';
import { resolve } from 'path';
import { projRoot } from '../configs';
import buildDts from './dts';
import buildModules from './modules';

const outputRootDist = () => {
	const files = ['es', 'lib', ['README.md', 'package.json']];

	const component = process.cwd().split('\\').pop();

	return Promise.all(
		files.map((file) => {
			const target = gulp.dest(resolve(projRoot, `dist/pro-${component}`, Array.isArray(file) ? '' : file));
			return gulp.src(Array.isArray(file) ? file : `./${file}/src/**`).pipe(target);
		})
	);
};

export default gulp.series(buildModules, buildDts, outputRootDist) as unknown;
