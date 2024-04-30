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

// src/components/Select/index.tsx
var Select_exports = {};
__export(Select_exports, {
  ProFieldSelect: () => ProFieldSelect,
  default: () => Select_default,
  proFieldCheckboxProps: () => proFieldCheckboxProps
});
module.exports = __toCommonJS(Select_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Select/index.tsx
var import_element_plus2 = require("element-plus");
var import_option = require("element-plus/theme-chalk/src/option.scss");
var import_select = require("element-plus/theme-chalk/src/select.scss");
var import_vue2 = require("vue");

// src/components/Select/props.ts
var import_element_plus = require("element-plus");
var proFieldCheckboxProps = {
  ...import_element_plus.checkboxProps,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
};

// src/components/Select/index.tsx
var ProFieldSelect = (0, import_vue2.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue2.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => {
      var _a;
      return /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElSelect, { "v-model": state.value }, (_a = props.options) == null ? void 0 : _a.map((option, index) => /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElOption, { ...option, key: index }, option.label)));
    };
  },
  {
    name: "ProFieldSelect"
  }
);
var Select_default = ProFieldSelect;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldSelect,
  proFieldCheckboxProps
});
