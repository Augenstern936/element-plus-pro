import { defineComponent as n, computed as u, createVNode as r, mergeProps as l } from "vue";
import { timePickerDefaultProps as a, ElTimePicker as s } from "element-plus";
const o = /* @__PURE__ */ n((e, m) => {
  const i = u({
    get: () => e.modelValue,
    set: (t) => {
      m.emit("upTime:modelValue", t);
    }
  });
  return () => r(s, l({
    modelValue: i.value,
    "onUpdate:modelValue": (t) => i.value = t
  }, e), null);
});
o.props = {
  ...a,
  style: {
    type: Object,
    default: {}
  }
};
const p = (e) => r(o, l(e, {
  isRange: !1
}), null), P = (e) => r(o, l(e, {
  isRange: !0
}), null);
export {
  p as ProFieldTime,
  P as ProFieldTimeRange
};
