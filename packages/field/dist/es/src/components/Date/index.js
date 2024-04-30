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

// src/components/Date/index.tsx
var Date_exports = {};
__export(Date_exports, {
  ProFieldDate: () => ProFieldDate,
  ProFieldDateMonth: () => ProFieldDateMonth,
  ProFieldDateMonthRange: () => ProFieldDateMonthRange,
  ProFieldDateRange: () => ProFieldDateRange,
  ProFieldDateTime: () => ProFieldDateTime,
  ProFieldDateTimeRange: () => ProFieldDateTimeRange,
  ProFieldDateWeek: () => ProFieldDateWeek,
  ProFieldDateYear: () => ProFieldDateYear,
  ProFieldDates: () => ProFieldDates,
  proDatePickerProps: () => proDatePickerProps
});
module.exports = __toCommonJS(Date_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Date/index.tsx
var import_pro_utils = require("@element-plus/pro-utils");
var import_element_plus2 = require("element-plus");
var import_date_picker = require("element-plus/theme-chalk/src/date-picker.scss");
var import_vue2 = require("vue");

// src/components/Date/props.ts
var import_element_plus = require("element-plus");
var proDatePickerProps = {
  ...import_element_plus.datePickerProps,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Date/index.tsx
var BaseDate = (0, import_vue2.defineComponent)((props, ctx) => {
  const state = (0, import_vue2.computed)({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  const placeholder = (0, import_vue2.computed)(() => {
    const value = props.placeholder ?? (0, import_pro_utils.formatPlaceholder)("", props.type || "text");
    if (Array.isArray(value) && value.length > 1) {
      return {
        startPlaceholder: value[0],
        endPlaceholder: value[1]
      };
    }
    return {
      placeholder: Array.isArray(value) ? value[0] : value
    };
  });
  return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElDatePicker, { "v-model": state.value, ...props, ...placeholder.value });
});
BaseDate.props = proDatePickerProps;
var ProFieldDate = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "date" });
var ProFieldDates = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "dates" });
var ProFieldDateTime = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "datetime" });
var ProFieldDateWeek = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "week" });
var ProFieldDateMonth = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "month" });
var ProFieldDateYear = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "year" });
var ProFieldDateRange = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "daterange" });
var ProFieldDateTimeRange = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "datetimerange" });
var ProFieldDateMonthRange = (props) => /* @__PURE__ */ (0, import_vue.h)(BaseDate, { ...props, type: "monthrange" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldDate,
  ProFieldDateMonth,
  ProFieldDateMonthRange,
  ProFieldDateRange,
  ProFieldDateTime,
  ProFieldDateTimeRange,
  ProFieldDateWeek,
  ProFieldDateYear,
  ProFieldDates,
  proDatePickerProps
});
