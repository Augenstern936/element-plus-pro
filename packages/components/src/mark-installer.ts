/*
 * @Description:
 * @Date: 2024-04-10 17:30:49
 * @LastEditTime: 2024-07-09 16:57:57
 */
import type { App, FunctionalComponent } from "vue-demi";
import { version } from "./version";

const markInstaller = (components: Record<string, any>) => {
  const install = (app: App) => {
    for (const key in components) {
      app.component(key, components[key] as FunctionalComponent);
    }
  };

  return {
    version: version["@element-plus-pro/components"],
    install
  };
};

export default markInstaller;
