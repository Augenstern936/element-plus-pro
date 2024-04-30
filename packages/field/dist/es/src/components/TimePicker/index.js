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

// src/components/TimePicker/index.tsx
var TimePicker_exports = {};
__export(TimePicker_exports, {
  ProFieldTime: () => ProFieldTime,
  ProFieldTimeRange: () => ProFieldTimeRange
});
module.exports = __toCommonJS(TimePicker_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/TimePicker/index.tsx
var import_element_plus = require("element-plus");
var import_time_picker = require("element-plus/theme-chalk/src/time-picker.scss");
var import_vue2 = require("vue");
var BaseTimePicker = (0, import_vue2.defineComponent)((props, ctx) => {
  const state = (0, import_vue2.computed)({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("upTime:modelValue", value);
    }
  });
  return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus.ElTimePicker, { "v-model": state.value, ...props });
});
BaseTimePicker.props = {
  ...import_element_plus.timePickerDefaultProps,
  style: {
    type: Object,
    default: {}
  }
};
var ProFieldTime = (props) => {
  return /* @__PURE__ */ (0, import_vue.h)(BaseTimePicker, { ...props, isRange: false });
};
var ProFieldTimeRange = (props) => {
  return /* @__PURE__ */ (0, import_vue.h)(BaseTimePicker, { ...props, isRange: true });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldTime,
  ProFieldTimeRange
});
