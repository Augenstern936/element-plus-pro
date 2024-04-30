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

// src/components/TimeSelect/props.ts
var props_exports = {};
__export(props_exports, {
  proFieldTimeSelectProps: () => proFieldTimeSelectProps
});
module.exports = __toCommonJS(props_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/TimeSelect/props.ts
var import_icons_vue = require("@element-plus/icons-vue");
var import_element_plus = require("element-plus");
var proFieldTimeSelectProps = {
  format: {
    type: String,
    default: "HH:mm"
  },
  modelValue: String,
  disabled: Boolean,
  editable: {
    type: Boolean,
    default: true
  },
  effect: {
    type: String,
    default: "light"
  },
  clearable: {
    type: Boolean,
    default: true
  },
  size: import_element_plus.useSizeProp,
  placeholder: String,
  start: {
    type: String,
    default: "09:00"
  },
  end: {
    type: String,
    default: "18:00"
  },
  step: {
    type: String,
    default: "00:30"
  },
  minTime: String,
  maxTime: String,
  name: String,
  prefixIcon: {
    type: [String, Object],
    default: () => import_icons_vue.Clock
  },
  clearIcon: {
    type: [String, Object],
    default: () => import_icons_vue.CircleClose
  },
  style: {
    type: Object,
    default: {}
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  proFieldTimeSelectProps
});
