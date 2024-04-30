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

// src/components/TreeSelect/index.tsx
var TreeSelect_exports = {};
__export(TreeSelect_exports, {
  ProFieldTreeSelect: () => ProFieldTreeSelect,
  default: () => TreeSelect_default
});
module.exports = __toCommonJS(TreeSelect_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/TreeSelect/index.tsx
var import_element_plus = require("element-plus");
var import_tree_select = require("element-plus/theme-chalk/src/tree-select.scss");
var import_vue2 = require("vue");
var ProFieldTreeSelect = (0, import_vue2.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue2.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus.ElTreeSelect, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldTreeSelect"
  }
);
var TreeSelect_default = ProFieldTreeSelect;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldTreeSelect
});
