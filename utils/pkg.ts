/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-22 22:07:38
 * @LastEditTime: 2024-04-24 22:50:19
 * @FilePath: \element-plus-pro\utils\pkg.ts
 */
import { findWorkspacePackages } from "@pnpm/find-workspace-packages";
import { projRoot } from "../configs";

export const getWorkspacePackages = () => findWorkspacePackages(projRoot);
