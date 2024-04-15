import { createVNode as p, mergeProps as P, defineComponent as s, computed as l } from "vue";
import { withInstall as F, formatPlaceholder as f } from "@element-plus/pro-utils";
import { ProFieldAvatar as u } from "./index17.mjs";
import { ProFieldCascader as g } from "./index16.mjs";
import { ProFieldCheckbox as h } from "./index15.mjs";
import { ProFieldColor as y } from "./index14.mjs";
import { ProFieldDate as T, ProFieldDates as S, ProFieldDateTime as v, ProFieldDateWeek as x, ProFieldDateMonth as R, ProFieldDateYear as D, ProFieldDateRange as A, ProFieldDateTimeRange as C, ProFieldDateMonthRange as V } from "./index13.mjs";
import { ProFieldImage as k } from "./index12.mjs";
import { ProFieldText as w, ProFieldPassword as b, ProFieldTextarea as M } from "./index11.mjs";
import { ProFieldProgress as N } from "./index10.mjs";
import { ProFieldRadio as n } from "./index9.mjs";
import { ProFieldRate as B } from "./index8.mjs";
import { ProFieldSelect as I } from "./index7.mjs";
import { ProFieldSlider as U } from "./index6.mjs";
import { ProFieldSwitch as W } from "./index5.mjs";
import { ProFieldTime as Y, ProFieldTimeRange as j } from "./index4.mjs";
import { ProFieldTimeSelect as O } from "./index3.mjs";
import { ProFieldTreeSelect as $ } from "./index2.mjs";
const i = {
  text: w,
  password: b,
  textarea: M,
  date: T,
  dates: S,
  dateTime: v,
  dateWeek: x,
  dateMonth: R,
  dateYear: D,
  dateRange: A,
  dateTimeRange: C,
  dateMonthRange: V,
  time: Y,
  timeRange: j,
  timeSelect: O,
  select: I,
  treeSelect: $,
  checkbox: h,
  radio: n,
  radioButton: n,
  switch: W,
  avatar: u,
  image: k,
  rate: B,
  color: y,
  cascader: g,
  slider: U,
  progress: N
}, q = {
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: ""
  },
  mode: {
    type: String,
    default: "edit"
  },
  valueType: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: [String, Array]
  },
  fieldProps: {
    type: Object,
    default: {}
  }
}, d = /* @__PURE__ */ s((r, t) => {
  const a = l(() => i[r.valueType || "text"]), o = l({
    get: () => r.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  }), c = l(() => {
    var m;
    const e = (m = r.placeholder) != null ? m : f("", r.valueType || "text");
    return Array.isArray(e) && e.length > 1 ? {
      startPlaceholder: e[0],
      endPlaceholder: e[1]
    } : {
      placeholder: Array.isArray(e) ? e[0] : e
    };
  });
  return () => p(a.value, P({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, r.fieldProps, c.value), null);
}, {
  name: "ProField"
});
d.props = q;
for (const r in i) {
  const t = r.charAt(0).toUpperCase() + r.slice(1), a = i[r];
  d[t] = (o) => p(a, P(o, {
    type: r
  }), null);
}
const de = F(d);
export {
  de as P,
  q as p
};
