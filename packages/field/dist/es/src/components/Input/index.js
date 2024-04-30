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

// src/components/Input/index.tsx
var Input_exports = {};
__export(Input_exports, {
  ProFieldPassword: () => ProFieldPassword,
  ProFieldText: () => ProFieldText,
  ProFieldTextarea: () => ProFieldTextarea,
  proInputProps: () => proInputProps
});
module.exports = __toCommonJS(Input_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Input/index.tsx
var import_element_plus2 = require("element-plus");
var import_input = require("element-plus/theme-chalk/src/input.scss");
var import_vue2 = require("vue");

// src/components/Input/props.ts
var import_element_plus = require("element-plus");
var proInputProps = {
  ...import_element_plus.inputProps,
  type: {
    type: String,
    default: "text"
  }
};

// src/components/Input/index.tsx
var ProFieldInput = (0, import_vue2.defineComponent)(
  (props, ctx) => {
    const state = (0, import_vue2.computed)({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        ctx.emit("update:modelValue", value);
      }
    });
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElInput, { "v-model": state.value, ...props });
  },
  {
    name: "ProFieldInput"
  }
);
ProFieldInput.props = proInputProps;
var ProFieldText = (props) => /* @__PURE__ */ (0, import_vue.h)(ProFieldInput, { ...props, type: "text" });
var ProFieldPassword = (props) => /* @__PURE__ */ (0, import_vue.h)(ProFieldInput, { ...props, type: "password" });
var ProFieldTextarea = (props) => /* @__PURE__ */ (0, import_vue.h)(ProFieldInput, { ...props, type: "textarea" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldPassword,
  ProFieldText,
  ProFieldTextarea,
  proInputProps
});
