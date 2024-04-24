import { createVNode, mergeProps, defineComponent, computed } from "vue";
import { formatPlaceholder } from "@element-plus/pro-utils";
import { datePickerProps, ElDatePicker } from "element-plus";
const BaseDate = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  const placeholder = computed(() => {
    var _a;
    const value = (_a = props.placeholder) != null ? _a : formatPlaceholder("", props.type || "text");
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
  return () => createVNode(ElDatePicker, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props, placeholder.value), null);
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
  return createVNode(BaseDate, mergeProps(props, {
    "type": "date"
  }), null);
};
const ProFieldDates = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "dates"
  }), null);
};
const ProFieldDateTime = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "datetime"
  }), null);
};
const ProFieldDateWeek = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "week"
  }), null);
};
const ProFieldDateMonth = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "month"
  }), null);
};
const ProFieldDateYear = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "year"
  }), null);
};
const ProFieldDateRange = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "daterange"
  }), null);
};
const ProFieldDateTimeRange = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "datetimerange"
  }), null);
};
const ProFieldDateMonthRange = (props) => {
  return createVNode(BaseDate, mergeProps(props, {
    "type": "monthrange"
  }), null);
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
