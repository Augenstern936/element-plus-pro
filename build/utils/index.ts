import { globSync } from "glob";
import { resolve } from "path";

/*
 * @Description:
 * @Date: 2024-05-21 14:03:12
 * @LastEditTime: 2024-08-28 15:14:45
 */
export * from "./pkg";
export * from "./rollup";

export function getEntry() {
  const entry: Record<string, string> = {};
  const files = globSync("src/**/*.{ts,tsx,vue}", {
    windowsPathsNoEscape: true,
    ignore: {
      ignored: p => {
        const exclude = ["typing.ts", ".d.ts"];
        return exclude.includes(p.name);
      }
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
    exports: format === "cjs" ? "named" : undefined,
    entryFileNames: `[name].${format == "es" ? "mjs" : "js"}`
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
