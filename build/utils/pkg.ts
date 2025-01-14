/*
 * @Description:
 * @Date: 2024-05-21 14:03:20
 * @LastEditTime: 2024-05-22 13:12:54
 */
import { ProjectManifest } from "@pnpm/types";

export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath) as ProjectManifest;
};

export const getPackageDependencies = (
  pkgPath: string
): Record<"dependencies" | "devDependencies" | "peerDependencies", string[]> => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, devDependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    devDependencies: Object.keys(devDependencies),
    peerDependencies: Object.keys(peerDependencies)
  };
};
