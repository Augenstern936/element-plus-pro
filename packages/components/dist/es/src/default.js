var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/default.ts
var default_exports = {};
__export(default_exports, {
  default: () => default_default
});
module.exports = __toCommonJS(default_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/default.ts
var import_pro_field = __toESM(require("@element-plus/pro-field"));
var import_pro_tabs = __toESM(require("@element-plus/pro-tabs"));

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

// src/default.ts
var default_default = mark_installer_default({
  ProTabs: import_pro_tabs.default,
  ProField: import_pro_field.default
  // ProTable,
  // ProButton,
  //ProSearchBar,
  //ProCenterContainer,
});
