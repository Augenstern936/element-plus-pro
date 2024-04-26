/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-04-26 15:19:06
 */
import { copyFile } from "fs/promises";
import gulp from "gulp";
import { resolve } from "path";
import { projRoot } from "../configs";
import dts from "./dts";
// import { buildModules } from "./modules";

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

export default gulp.series(dts, gulp.parallel(copyFiles), copyProject) as unknown;
