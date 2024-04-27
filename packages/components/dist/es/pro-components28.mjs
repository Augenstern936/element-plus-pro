import { createVNode as t, mergeProps as a, defineComponent as i, computed as d } from "vue";
import { formatPlaceholder as m } from "@element-plus/pro-utils";
import { ElDatePicker as u } from "element-plus";
import { proDatePickerProps as P } from "./pro-components32.mjs";
const r = /* @__PURE__ */ i((e, p) => {
  const n = d({
    get: () => e.modelValue,
    set: (o) => {
      p.emit("update:modelValue", o);
    }
  }), s = d(() => {
    var o;
    const l = (o = e.placeholder) != null ? o : m("", e.type || "text");
    return Array.isArray(l) && l.length > 1 ? {
      startPlaceholder: l[0],
      endPlaceholder: l[1]
    } : {
      placeholder: Array.isArray(l) ? l[0] : l
    };
  });
  return () => t(u, a({
    modelValue: n.value,
    "onUpdate:modelValue": (o) => n.value = o
  }, e, s.value), null);
});
r.props = P;
const F = (e) => t(r, a(e, {
  type: "date"
}), null), g = (e) => t(r, a(e, {
  type: "dates"
}), null), f = (e) => t(r, a(e, {
  type: "datetime"
}), null), k = (e) => t(r, a(e, {
  type: "week"
}), null), V = (e) => t(r, a(e, {
  type: "month"
}), null), v = (e) => t(r, a(e, {
  type: "year"
}), null), A = (e) => t(r, a(e, {
  type: "daterange"
}), null), R = (e) => t(r, a(e, {
  type: "datetimerange"
}), null), x = (e) => t(r, a(e, {
  type: "monthrange"
}), null);
export {
  F as ProFieldDate,
  V as ProFieldDateMonth,
  x as ProFieldDateMonthRange,
  A as ProFieldDateRange,
  f as ProFieldDateTime,
  R as ProFieldDateTimeRange,
  k as ProFieldDateWeek,
  v as ProFieldDateYear,
  g as ProFieldDates,
  P as proDatePickerProps
};
