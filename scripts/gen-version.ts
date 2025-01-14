import { findWorkspacePackages } from "@pnpm/find-workspace-packages";
import { pkgsRoot, componentsRoot } from "../configs";
import { writeFile } from "fs/promises";
import { resolve } from "path";

(async function () {
  const pkgs = await findWorkspacePackages(pkgsRoot);
  const pkgsVersion = Object.fromEntries(pkgs.map(pkg => [pkg.manifest.name, pkg.manifest.version]));

  const writePath = resolve(componentsRoot, "src/version.ts");

  const writeContent = `export const version = ${JSON.stringify(pkgsVersion, null, "\t")}`;

  await writeFile(writePath, writeContent);
})();
