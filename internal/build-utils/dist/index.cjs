'use strict';

const path = require('path');

const rootPath = path.resolve(__dirname, "..", "..", "..");
const pkgRoot = path.resolve(rootPath, "packages");
const buildOutput = path.resolve(rootPath, "dist");
const epOutput = path.resolve(buildOutput, "element-plus");
const buildRoot = path.resolve(rootPath, "internal", "build");
const pkgsRoot = path.resolve(rootPath, "packages");
const allComPkgBuildInputs = {
  //omponents: resolve(pkgsRoot, "components", "index.ts"),
  button: path.resolve(pkgsRoot, "button", "src", "index.ts")
};

const excludeFiles = (files) => {
  const excludes = ["node_modules", "test", "mock", "gulpfile", "dist"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

exports.allComPkgBuildInputs = allComPkgBuildInputs;
exports.buildOutput = buildOutput;
exports.buildRoot = buildRoot;
exports.epOutput = epOutput;
exports.excludeFiles = excludeFiles;
exports.pkgRoot = pkgRoot;
exports.pkgsRoot = pkgsRoot;
exports.rootPath = rootPath;
