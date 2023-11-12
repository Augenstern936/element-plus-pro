import type { TaskFunction } from "gulp";
import { run } from "./process";
import { buildRoot } from "@element-plus/pro-build-utils";

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => {
    return Object.assign(fn, {displayName: name});
}

export const runTask = (name: string) => {
    withTaskName(`shellTask：${name}`, () => {
        return run(`pnpm run start ${name}`, buildRoot);
    })
}