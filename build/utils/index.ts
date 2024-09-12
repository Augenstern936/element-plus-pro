import { globSync } from "glob";
import { resolve } from "path";

/*
 * @Description:
 * @Date: 2024-05-21 14:03:12
 * @LastEditTime: 2024-09-12 18:10:15
 */
export * from "./pkg";
export * from "./rollup";

export function getEntry(preserveModules: boolean) {
  if (preserveModules) {
    return "src/index.ts";
  }

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
    preserveModules,
    preserveModulesRoot: resolve(process.cwd(), "src"),
    exports: format === "cjs" ? "named" : undefined,
    entryFileNames: `[name].${format == "es" ? "mjs" : "js"}`
    // chunkFileNames: `[name].${format == "es" ? "mjs" : "js"}`
    // hoistTransitiveImports: false,
    // manualChunks: (id: string) => {
    //   const packages = ["packages/utils", "packages/hooks"].some(v => id.includes(v));
    //   const exclude = ["typing.ts", "index.ts"].some(v => id.includes(v));
    //   if (packages && !exclude) {
    //     const file = id.split("packages/")[1];
    //     return file.replace(".ts", "").replace(".tsx", "");
    //   }
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
