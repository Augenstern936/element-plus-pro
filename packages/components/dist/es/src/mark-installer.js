var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mark-installer.ts
var mark_installer_exports = {};
__export(mark_installer_exports, {
  default: () => mark_installer_default
});
module.exports = __toCommonJS(mark_installer_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

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
