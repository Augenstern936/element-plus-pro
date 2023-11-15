import { resolve } from "path";

export const rootPath = resolve(__dirname, "..", "..", "..");

export const pkgRoot = resolve(rootPath, 'packages');

export const buildOutput = resolve(rootPath, "dist");

export const epOutput = resolve(buildOutput, "element-plus");

export const buildRoot = resolve(rootPath, "internal", "build");

export const pkgsRoot = resolve(rootPath, "packages");

export const allComPkgBuildInputs = {
    //omponents: resolve(pkgsRoot, "components", "index.ts"),
    button: resolve(pkgsRoot, "button", "src", "index.ts"),
}

