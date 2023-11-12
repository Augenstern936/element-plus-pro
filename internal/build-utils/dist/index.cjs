'use strict';

const path = require('path');

const rootPath = path.resolve(__dirname, "..", "..", "..");
const buildOutput = path.resolve(rootPath, "dist");
const epOutput = path.resolve(buildOutput, "element-plus");
const buildRoot = path.resolve(rootPath, "internal", "build");
const pkgsRoot = path.resolve(rootPath, "packages");
const allComPkgBuildInputs = {
  omponents: path.resolve(pkgsRoot, "components", "index.ts"),
  button: path.resolve(pkgsRoot, "button", "src", "index.ts")
};

exports.allComPkgBuildInputs = allComPkgBuildInputs;
exports.buildOutput = buildOutput;
exports.buildRoot = buildRoot;
exports.epOutput = epOutput;
exports.pkgsRoot = pkgsRoot;
exports.rootPath = rootPath;
