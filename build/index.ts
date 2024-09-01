/*
 * @Description:
 * @Date: 2024-04-25 09:53:37
 * @LastEditTime: 2024-09-01 13:34:01
 */
import fs from "fs";
import { glob } from "glob";
import gulp from "gulp";
import { resolve } from "path";
import { projRoot } from "../configs";
import buildModules from "./modules";

const outputRootDist = () => {
  const files = ["es", "lib", ["README.md", "CHANGELOG.md", "package.json"]];

  const component = process.cwd().split("\\").pop();

  const dir = resolve(projRoot, "dist", `pro-${component}`);

  const isHasTarget = glob.sync(dir);

  if (isHasTarget.length) {
    fs.rmdirSync(dir, { recursive: true });
  }

  return Promise.all(
    files.map(file => {
      const target = gulp.dest(resolve(dir, Array.isArray(file) ? "" : file));
      return gulp.src(Array.isArray(file) ? file : `${file}/**`).pipe(target);
    })
  );
};

export default gulp.series(buildModules, outputRootDist) as unknown;
