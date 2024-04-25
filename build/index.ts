/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-04-25 18:47:15
 */
import { copyFile } from "fs/promises";
import gulp from "gulp";
import path from "path";
import { projRoot } from "../configs";
import dts from "./dts";
import { buildModules } from "./modules";

const copyFiles = (target: "es" | "lib") => {
	const dirname = process.cwd();
	return () => {
		return Promise.all([
			copyFile(
				path.resolve(dirname, "README.md"),
				path.resolve(dirname, `${dirname}/dist/${target}`, "README.md")
			),
			copyFile(
				path.resolve(dirname, "package.json"),
				path.resolve(dirname, `${dirname}/dist/${target}`, "package.json")
			),
		]);
	};
};

const copyProject = () => {
	const dirname = process.cwd();
	const filename = dirname.split("\\").pop();
	return gulp.src("./dist/*/**").pipe(gulp.dest(path.resolve(projRoot, `dist/pro-${filename}`)));
};

export default gulp.series(buildModules, dts, gulp.parallel(copyFiles("es"), copyFiles("lib")), copyProject) as unknown;
