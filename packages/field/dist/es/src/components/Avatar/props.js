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

// src/components/Avatar/props.ts
var props_exports = {};
__export(props_exports, {
  proFieldAvatar: () => proFieldAvatar
});
module.exports = __toCommonJS(props_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Avatar/props.ts
var import_element_plus = require("element-plus");
var proFieldAvatar = {
  ...import_element_plus.avatarProps,
  style: {
    type: Object,
    default: {}
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  proFieldAvatar
});
