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

// src/components/Radio/index.tsx
var Radio_exports = {};
__export(Radio_exports, {
  ProFieldRadio: () => ProFieldRadio,
  default: () => Radio_default,
  proFieldRadioProps: () => proFieldRadioProps
});
module.exports = __toCommonJS(Radio_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Radio/index.tsx
var import_element_plus2 = require("element-plus");
var import_radio_button = require("element-plus/theme-chalk/src/radio-button.scss");
var import_radio_group = require("element-plus/theme-chalk/src/radio-group.scss");
var import_radio = require("element-plus/theme-chalk/src/radio.scss");
var import_vue2 = require("vue");

// src/components/Radio/props.ts
var import_element_plus = require("element-plus");
var proFieldRadioProps = {
  ...import_element_plus.radioProps,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Radio/index.tsx
var ProFieldRadio = (0, import_vue2.defineComponent)(
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
      return /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElRadioGroup, { "v-model": state.value }, (_a = props.options) == null ? void 0 : _a.map((option, i) => /* @__PURE__ */ (0, import_vue.h)(import_vue.Fragment, null, option.type == "radio" ? /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElRadio, { ...option, key: i }, option.label) : /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElRadioButton, { label: option.value, key: i }, option.label))));
    };
  },
  {
    name: "ProFieldRadio"
  }
);
ProFieldRadio.props = proFieldRadioProps;
var Radio_default = ProFieldRadio;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldRadio,
  proFieldRadioProps
});
