/*
 * @Description:
 * @Date: 2024-09-03 11:53:02
 * @LastEditTime: 2024-09-03 18:04:57
 */
import * as ElementPlus from "element-plus";
import type { PluginOption } from "vite";

function camelToKebab(v: string) {
  return v.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export default (option: Record<string, string>): PluginOption => {
  return {
    name: "vite-plugins-auto-import-style",
    transform(code) {
      const components = Object.keys(ElementPlus).filter(key => key.includes("El"));
      const importComponents = components.filter(name => code.includes(name));
      if (importComponents.length) {
        console.log("+++++++++++++++++++++++++++++++++++++");
        console.log(code);
        console.log("+++++++++++++++++++++++++++++++++++++");
        code = `import element-plus/theme-chalk/${camelToKebab(importComponents[0])}.css;\n${code}`;
      }
      return {
        code
      };
    }
  };
};
