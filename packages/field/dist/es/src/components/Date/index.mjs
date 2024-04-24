import { createVNode as r, mergeProps as l, defineComponent as c, computed as d } from "vue";
import { formatPlaceholder as p } from "@element-plus/pro-utils";
import { datePickerProps as m, ElDatePicker as s } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/date-picker.scss.mjs";
const a = /* @__PURE__ */ c((e, u) => {
  const n = d({
    get: () => e.modelValue,
    set: (t) => {
      u.emit("update:modelValue", t);
    }
  }), i = d(() => {
    var o;
    const t = (o = e.placeholder) != null ? o : p("", e.type || "text");
    return Array.isArray(t) && t.length > 1 ? {
      startPlaceholder: t[0],
      endPlaceholder: t[1]
    } : {
      placeholder: Array.isArray(t) ? t[0] : t
    };
  });
  return () => r(s, l({
    modelValue: n.value,
    "onUpdate:modelValue": (t) => n.value = t
  }, e, i.value), null);
});
a.props = {
  ...m,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const g = (e) => r(a, l(e, {
  type: "date"
}), null), F = (e) => r(a, l(e, {
  type: "dates"
}), null), f = (e) => r(a, l(e, {
  type: "datetime"
}), null), v = (e) => r(a, l(e, {
  type: "week"
}), null), A = (e) => r(a, l(e, {
  type: "month"
}), null), V = (e) => r(a, l(e, {
  type: "year"
}), null), k = (e) => r(a, l(e, {
  type: "daterange"
}), null), R = (e) => r(a, l(e, {
  type: "datetimerange"
}), null), x = (e) => r(a, l(e, {
  type: "monthrange"
}), null);
export {
  g as ProFieldDate,
  A as ProFieldDateMonth,
  x as ProFieldDateMonthRange,
  k as ProFieldDateRange,
  f as ProFieldDateTime,
  R as ProFieldDateTimeRange,
  v as ProFieldDateWeek,
  V as ProFieldDateYear,
  F as ProFieldDates
};
