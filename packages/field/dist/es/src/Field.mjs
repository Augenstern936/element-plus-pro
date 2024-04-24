import { createVNode as m, mergeProps as s, defineComponent as P, computed as p } from "vue";
import { withInstall as n, formatPlaceholder as c } from "@element-plus/pro-utils";
import { components as d } from "./components/index.mjs";
import { proFieldProps as F } from "./typing.mjs";
import { proFieldAvatar as A } from "./components/Avatar/typing.mjs";
import { ProFieldAvatar as V } from "./components/Avatar/index.mjs";
import { proFieldCascaderProps as k } from "./components/Cascader/typing.mjs";
import { ProFieldCascader as I } from "./components/Cascader/index.mjs";
import { proFieldCheckboxProps as b } from "./components/Checkbox/typing.mjs";
import { ProFieldCheckbox as U } from "./components/Checkbox/index.mjs";
import { proFieldColor as j } from "./components/Color/typing.mjs";
import { ProFieldColor as z } from "./components/Color/index.mjs";
import { proFieldImageProps as D } from "./components/Image/typing.mjs";
import { ProFieldImage as G } from "./components/Image/index.mjs";
import { proFieldProgressProps as J } from "./components/Progress/typing.mjs";
import { ProFieldProgress as L } from "./components/Progress/index.mjs";
import { proFieldRadioProps as O } from "./components/Radio/typing.mjs";
import { ProFieldRadio as W } from "./components/Radio/index.mjs";
import { proFieldRateProps as Y } from "./components/Rate/typing.mjs";
import { ProFieldRate as _ } from "./components/Rate/index.mjs";
import { proFieldSliderProps as re } from "./components/Slider/typing.mjs";
import { ProFieldSlider as te } from "./components/Slider/index.mjs";
import { proFieldSwitchProps as pe } from "./components/Switch/typing.mjs";
import { ProFieldSwitch as ae } from "./components/Switch/index.mjs";
import { ProFieldTreeSelect as me } from "./components/TreeSelect/index.mjs";
const a = /* @__PURE__ */ P((r, t) => {
  const l = p(() => d[r.valueType || "text"]), o = p({
    get: () => r.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  }), f = p(() => {
    var i;
    const e = (i = r.placeholder) != null ? i : c("", r.valueType || "text");
    return Array.isArray(e) && e.length > 1 ? {
      startPlaceholder: e[0],
      endPlaceholder: e[1]
    } : {
      placeholder: Array.isArray(e) ? e[0] : e
    };
  });
  return () => m(l.value, s({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, r.fieldProps, f.value), null);
}, {
  name: "ProField"
});
a.props = F;
for (const r in d) {
  const t = r.charAt(0).toUpperCase() + r.slice(1), l = d[r];
  a[t] = (o) => m(l, s(o, {
    type: r
  }), null);
}
const v = n(a);
export {
  V as ProFieldAvatar,
  I as ProFieldCascader,
  U as ProFieldCheckbox,
  z as ProFieldColor,
  G as ProFieldImage,
  L as ProFieldProgress,
  W as ProFieldRadio,
  _ as ProFieldRate,
  te as ProFieldSlider,
  ae as ProFieldSwitch,
  me as ProFieldTreeSelect,
  d as components,
  v as default,
  A as proFieldAvatar,
  k as proFieldCascaderProps,
  b as proFieldCheckboxProps,
  j as proFieldColor,
  D as proFieldImageProps,
  J as proFieldProgressProps,
  O as proFieldRadioProps,
  Y as proFieldRateProps,
  re as proFieldSliderProps,
  pe as proFieldSwitchProps
};
