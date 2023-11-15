declare const rootPath: string;
declare const pkgRoot: string;
declare const buildOutput: string;
declare const epOutput: string;
declare const buildRoot: string;
declare const pkgsRoot: string;
declare const allComPkgBuildInputs: {
    button: string;
};

declare const excludeFiles: (files: string[]) => string[];

export { allComPkgBuildInputs, buildOutput, buildRoot, epOutput, excludeFiles, pkgRoot, pkgsRoot, rootPath };
