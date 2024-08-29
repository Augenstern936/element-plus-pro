import { globSync } from "glob";
import { resolve } from "path";

/*
 * @Description:
 * @Date: 2024-05-21 14:03:12
 * @LastEditTime: 2024-08-29 18:22:25
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
    exports: format === "cjs" ? "named" : undefined,
    entryFileNames: `[name].${format == "es" ? "mjs" : "js"}`,
    manualChunks: (id, info) => {
      console.log(id, JSON.stringify(info), "99999");
      return "";
    }
    // manualChunks: {
    //   utils: ["@element-plus-ui/pro-utils"],
    //   "hooks/": ["@element-plus-ui/pro-hooks"]
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
