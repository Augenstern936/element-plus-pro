import { resolve } from "path";

/*
 * @Description:
 * @Date: 2024-05-21 14:03:12
 * @LastEditTime: 2024-08-27 21:21:13
 */
export * from "./pkg";
export * from "./rollup";

export function getOutputConfig(format: "es" | "cjs", preserveModules: boolean): Record<string, any> {
  return {
    format,
    dir: format == "es" ? "es" : "lib",
    sourcemap: false,
    preserveModules: false,
    preserveModulesRoot: resolve(process.cwd(), "src"),
    exports: format === "cjs" ? "named" : undefined,
    entryFileNames: `[name].${format == "es" ? "mjs" : "js"}`
    // chunkFileNames: (chunkInfo: any) => {
    //   console.log(chunkInfo, "chunkInfo");
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
