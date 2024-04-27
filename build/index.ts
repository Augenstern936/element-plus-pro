/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-04-27 17:36:12
 */
import { copyFile } from "fs/promises";
import gulp from "gulp";
import { resolve } from "path";
import { projRoot } from "../configs";
import buildDts from "./dts";
import buildModules from "./modules";

const copyFiles = () => {
	const dirname = process.cwd();
	return Promise.all([
		copyFile(resolve(dirname, "README.md"), resolve(dirname, `${dirname}/dist`, "README.md")),
		copyFile(resolve(dirname, "package.json"), resolve(dirname, `${dirname}/dist`, "package.json")),
	]);
};

const copyProject = () => {
	const dirname = process.cwd();
	const filename = dirname.split("\\").pop();
	return gulp.src("./dist/**").pipe(gulp.dest(resolve(projRoot, `dist/pro-${filename}`)));
};

export default gulp.series(buildModules, buildDts, gulp.parallel(copyFiles), copyProject) as unknown;
