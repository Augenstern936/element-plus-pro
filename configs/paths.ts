/*
 * @Description:
 * @Date: 2024-04-27 16:16:26
 * @LastEditTime: 2024-05-22 11:57:46
 */
import { resolve } from "path";

export const projRoot = resolve(__dirname, "..");

export const pkgsRoot = resolve(projRoot, "packages");

export const rootPackage = resolve(projRoot, "package.json");

export const componentsRoot = resolve(pkgsRoot, "components");
