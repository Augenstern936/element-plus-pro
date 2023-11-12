import { resolve } from 'path';

const rootPath = resolve(__dirname, "..", "..", "..");
const buildOutput = resolve(rootPath, "dist");
const epOutput = resolve(buildOutput, "element-plus");
const buildRoot = resolve(rootPath, "internal", "build");
const pkgsRoot = resolve(rootPath, "packages");
const allComPkgBuildInputs = {
  omponents: resolve(pkgsRoot, "components", "index.ts"),
  button: resolve(pkgsRoot, "button", "src", "index.ts")
};

export { allComPkgBuildInputs, buildOutput, buildRoot, epOutput, pkgsRoot, rootPath };
