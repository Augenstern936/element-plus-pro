import { resolve } from 'path';

const rootPath = resolve(__dirname, "..", "..", "..");
const pkgRoot = resolve(rootPath, "packages");
const buildOutput = resolve(rootPath, "dist");
const epOutput = resolve(buildOutput, "element-plus");
const buildRoot = resolve(rootPath, "internal", "build");
const pkgsRoot = resolve(rootPath, "packages");
const allComPkgBuildInputs = {
  //omponents: resolve(pkgsRoot, "components", "index.ts"),
  button: resolve(pkgsRoot, "button", "src", "index.ts")
};

const excludeFiles = (files) => {
  const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

export { allComPkgBuildInputs, buildOutput, buildRoot, epOutput, excludeFiles, pkgRoot, pkgsRoot, rootPath };
