import { createVNode as l, mergeProps as o, defineComponent as u, computed as d } from "vue";
import { formatPlaceholder as c } from "@element-plus/pro-utils";
import { ElDatePicker as p } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.1_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/date-picker.scss.mjs";
import { proDatePickerProps as s } from "./props.mjs";
const r = /* @__PURE__ */ u((e, i) => {
  const a = d({
    get: () => e.modelValue,
    set: (t) => {
      i.emit("update:modelValue", t);
    }
  }), m = d(() => {
    var n;
    const t = (n = e.placeholder) != null ? n : c("", e.type || "text");
    return Array.isArray(t) && t.length > 1 ? {
      startPlaceholder: t[0],
      endPlaceholder: t[1]
    } : {
      placeholder: Array.isArray(t) ? t[0] : t
    };
  });
  return () => l(p, o({
    modelValue: a.value,
    "onUpdate:modelValue": (t) => a.value = t
  }, e, m.value), null);
});
r.props = s;
const F = (e) => l(r, o(e, {
  type: "date"
}), null), f = (e) => l(r, o(e, {
  type: "dates"
}), null), V = (e) => l(r, o(e, {
  type: "datetime"
}), null), k = (e) => l(r, o(e, {
  type: "week"
}), null), v = (e) => l(r, o(e, {
  type: "month"
}), null), A = (e) => l(r, o(e, {
  type: "year"
}), null), R = (e) => l(r, o(e, {
  type: "daterange"
}), null), x = (e) => l(r, o(e, {
  type: "datetimerange"
}), null), M = (e) => l(r, o(e, {
  type: "monthrange"
}), null);
export {
  F as ProFieldDate,
  v as ProFieldDateMonth,
  M as ProFieldDateMonthRange,
  R as ProFieldDateRange,
  V as ProFieldDateTime,
  x as ProFieldDateTimeRange,
  k as ProFieldDateWeek,
  A as ProFieldDateYear,
  f as ProFieldDates,
  s as proDatePickerProps
};
