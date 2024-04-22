import { formatPlaceholder } from "@element-plus/pro-utils";
import { datePickerProps, ElDatePicker } from "element-plus";
import "element-plus/theme-chalk/src/date-picker.scss";
import { computed, defineComponent } from "vue";
const BaseDate = defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  const placeholder = computed(() => {
    const value = props.placeholder ?? formatPlaceholder("", props.type || "text");
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
  return () => /* @__PURE__ */ React.createElement(ElDatePicker, { "v-model": state.value, ...props, ...placeholder.value });
});
BaseDate.props = {
  ...datePickerProps,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const ProFieldDate = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "date" });
};
const ProFieldDates = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "dates" });
};
const ProFieldDateTime = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "datetime" });
};
const ProFieldDateWeek = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "week" });
};
const ProFieldDateMonth = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "month" });
};
const ProFieldDateYear = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "year" });
};
const ProFieldDateRange = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "daterange" });
};
const ProFieldDateTimeRange = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "datetimerange" });
};
const ProFieldDateMonthRange = (props) => {
  return /* @__PURE__ */ React.createElement(BaseDate, { ...props, type: "monthrange" });
};
export {
  ProFieldDate,
  ProFieldDateMonth,
  ProFieldDateMonthRange,
  ProFieldDateRange,
  ProFieldDateTime,
  ProFieldDateTimeRange,
  ProFieldDateWeek,
  ProFieldDateYear,
  ProFieldDates
};
//# sourceMappingURL=index.mjs.map