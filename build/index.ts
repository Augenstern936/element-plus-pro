/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-05-13 18:58:01
 */
import gulp from "gulp";
import { resolve } from "path";
import { rimraf } from "rimraf";
import { projRoot } from "../configs";
import buildDts from "./dts";
import buildModules from "./modules";

const delSrcDir = () => {
	const dirs = ["es", "lib"];
	return Promise.all(
		dirs.map((dir) => gulp.src(`./${dir}/src/**`).pipe(gulp.dest(dir).on("end", () => rimraf(`./${dir}/src`))))
	);
};

const outputRootDist = () => {
	const files = ["es", "lib", ["README.md", "package.json"]];

	const component = process.cwd().split("\\").pop();

	return Promise.all(
		files.map((file) => {
			const target = gulp.dest(resolve(projRoot, `dist/pro-${component}`, Array.isArray(file) ? "" : file));
			return gulp.src(Array.isArray(file) ? file : `./${file}/src/**`).pipe(target);
		})
	);
};

export default gulp.series(buildModules, buildDts, delSrcDir, outputRootDist) as unknown;
