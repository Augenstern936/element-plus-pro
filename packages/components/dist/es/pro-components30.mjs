import { createVNode as l, mergeProps as t, defineComponent as i, computed as n } from "vue";
import { timePickerDefaultProps as u, ElTimePicker as p } from "element-plus";
const m = /* @__PURE__ */ i((e, a) => {
  const r = n({
    get: () => e.modelValue,
    set: (o) => {
      a.emit("upTime:modelValue", o);
    }
  });
  return () => l(p, t({
    modelValue: r.value,
    "onUpdate:modelValue": (o) => r.value = o
  }, e), null);
});
m.props = {
  ...u,
  style: {
    type: Object,
    default: {}
  }
};
const c = (e) => l(m, t(e, {
  isRange: !1
}), null), P = (e) => l(m, t(e, {
  isRange: !0
}), null);
export {
  c as ProFieldTime,
  P as ProFieldTimeRange
};
