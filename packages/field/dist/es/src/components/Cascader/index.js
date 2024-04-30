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

// src/components/Cascader/index.tsx
var Cascader_exports = {};
__export(Cascader_exports, {
  ProFieldCascader: () => ProFieldCascader,
  default: () => Cascader_default,
  proFieldCascaderProps: () => proFieldCascaderProps
});
module.exports = __toCommonJS(Cascader_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Cascader/index.tsx
var import_element_plus2 = require("element-plus");
var import_cascader = require("element-plus/theme-chalk/src/cascader.scss");
var import_vue2 = require("vue");

// src/components/Cascader/props.ts
var import_element_plus = require("element-plus");
var proFieldCascaderProps = {
  ...import_element_plus.cascaderProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Cascader/index.tsx
var ProFieldCascader = (0, import_vue2.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue2.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElCascader, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldCascader"
  }
);
ProFieldCascader.props = proFieldCascaderProps;
var Cascader_default = ProFieldCascader;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldCascader,
  proFieldCascaderProps
});
