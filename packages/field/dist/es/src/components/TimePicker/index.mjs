import { createVNode as r, mergeProps as l, defineComponent as n, computed as u } from "vue";
import { timePickerDefaultProps as a, ElTimePicker as s } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/time-picker.scss.mjs";
const o = /* @__PURE__ */ n((e, i) => {
  const m = u({
    get: () => e.modelValue,
    set: (t) => {
      i.emit("upTime:modelValue", t);
    }
  });
  return () => r(s, l({
    modelValue: m.value,
    "onUpdate:modelValue": (t) => m.value = t
  }, e), null);
});
o.props = {
  ...a,
  style: {
    type: Object,
    default: {}
  }
};
const P = (e) => r(o, l(e, {
  isRange: !1
}), null), f = (e) => r(o, l(e, {
  isRange: !0
}), null);
export {
  P as ProFieldTime,
  f as ProFieldTimeRange
};
