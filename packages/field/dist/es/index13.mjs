import { defineComponent as i, computed as d, createVNode as r, mergeProps as l } from "vue";
import { formatPlaceholder as s } from "@element-plus/pro-utils";
import { datePickerProps as p, ElDatePicker as m } from "element-plus";
const a = /* @__PURE__ */ i((e, u) => {
  const n = d({
    get: () => e.modelValue,
    set: (t) => {
      u.emit("update:modelValue", t);
    }
  }), c = d(() => {
    var o;
    const t = (o = e.placeholder) != null ? o : s("", e.type || "text");
    return Array.isArray(t) && t.length > 1 ? {
      startPlaceholder: t[0],
      endPlaceholder: t[1]
    } : {
      placeholder: Array.isArray(t) ? t[0] : t
    };
  });
  return () => r(m, l({
    modelValue: n.value,
    "onUpdate:modelValue": (t) => n.value = t
  }, e, c.value), null);
});
a.props = {
  ...p,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const D = (e) => r(a, l(e, {
  type: "date"
}), null), g = (e) => r(a, l(e, {
  type: "dates"
}), null), F = (e) => r(a, l(e, {
  type: "datetime"
}), null), f = (e) => r(a, l(e, {
  type: "week"
}), null), k = (e) => r(a, l(e, {
  type: "month"
}), null), v = (e) => r(a, l(e, {
  type: "year"
}), null), A = (e) => r(a, l(e, {
  type: "daterange"
}), null), V = (e) => r(a, l(e, {
  type: "datetimerange"
}), null), R = (e) => r(a, l(e, {
  type: "monthrange"
}), null);
export {
  D as ProFieldDate,
  k as ProFieldDateMonth,
  R as ProFieldDateMonthRange,
  A as ProFieldDateRange,
  F as ProFieldDateTime,
  V as ProFieldDateTimeRange,
  f as ProFieldDateWeek,
  v as ProFieldDateYear,
  g as ProFieldDates
};
