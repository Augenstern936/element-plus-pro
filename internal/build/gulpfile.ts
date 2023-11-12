import { series, parallel } from "gulp";
import { withTaskName, run, runTask } from "./src";
import { mkdir } from "fs/promises";
import { epOutput } from "@element-plus/pro-build-utils";
//import { buildModules } from "./src";

export * from "./src";

const build = series(
    withTaskName('clean', () => run('pnpm run clean')),
    withTaskName('createOutput', () => mkdir(epOutput, {recursive: true})),
    parallel(
        runTask('buildModules')
    )
) as unknown;

export default build;