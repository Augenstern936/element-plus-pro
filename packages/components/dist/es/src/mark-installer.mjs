import { version } from "./version.mjs";
const markInstaller = (components) => {
  const install = (app) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  };
  return {
    version: version["@element-plus/pro-components"],
    install
  };
};
export {
  markInstaller as default
};
