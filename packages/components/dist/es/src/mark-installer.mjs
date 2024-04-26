// ../../build/jsxFactory.ts
import { Fragment, h } from "vue";

// src/version.ts
var version = {
  "@element-plus/pro-button": "0.0.1",
  "@element-plus/pro-center-container": "0.0.1",
  "@element-plus/pro-components": "0.0.1-test-01-test-01",
  "@element-plus/pro-search-bar": "0.0.1",
  "@element-plus/pro-table": "0.0.1",
  "@element-plus/pro-tabs": "0.0.1",
  "@element-plus/pro-utils": "1.0.0"
};

// src/mark-installer.ts
var markInstaller = (components) => {
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
var mark_installer_default = markInstaller;
export {
  mark_installer_default as default
};
