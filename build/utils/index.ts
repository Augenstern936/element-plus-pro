import { globSync } from "glob";
import { resolve } from "path";

/*
 * @Description:
 * @Date: 2024-05-21 14:03:12
 * @LastEditTime: 2024-08-29 22:52:46
 */
export * from "./pkg";
export * from "./rollup";

export function getEntry() {
  const entry: Record<string, string> = {};
  const files = globSync("src/**/*.{ts,tsx,vue}", {
    windowsPathsNoEscape: true,
    ignore: {
      ignored: p => ["typing.ts", ".d.ts"].includes(p.name)
    }
  });
  files.forEach(v => {
    const key = v.replace(/src\\/g, "").replace(".vue", "").replace(".tsx", "").replace(".ts", "");
    entry[key] = v;
  });
  return entry;
}

export function getOutputConfig(format: "es" | "cjs", preserveModules: boolean): Record<string, any> {
  return {
    format,
    dir: format == "es" ? "es" : "lib",
    preserveModules: false,
    preserveModulesRoot: resolve(process.cwd(), "src"),
    externalLiveBindings: false,
    exports: format === "cjs" ? "named" : "named",
    entryFileNames: `[name].${format == "es" ? "mjs" : "js"}`
    // manualChunks: (id: string, info: Record<string, any>) => {
    //   console.log(JSON.stringify(info.getModuleInfo()), "info");
    //   const has = ["packages/utils", "packages/hooks"];
    //   if (id.includes(has[0]) || id.includes(has[1])) {
    //     const file = id.split("element-plus-pro/packages")[1];
    //     return file.replace(".ts", "").replace(".tsx", "").slice(1, -1);
    //   }
    //   return "";
    // }
  };
}

export function toGreatHump(str: string) {
  return str
    .replace(/^\w/g, match => {
      return match.toUpperCase();
    })
    .replace(/-(\w)/g, ($0, $1) => {
      return $1.toUpperCase();
    });
}
