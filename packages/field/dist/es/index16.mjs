import { defineComponent as r, computed as d, createVNode as l, mergeProps as s } from "vue";
import { calendarProps as c, ElCascader as m } from "element-plus";
const n = {
  ...c,
  style: {
    type: Object,
    default: {}
  }
}, u = /* @__PURE__ */ r((a, t) => {
  const o = d({
    get: () => a.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  });
  return () => l(m, s({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, a), null);
}, {
  name: "ProFieldCascader"
});
u.props = n;
export {
  u as ProFieldCascader,
  u as default,
  n as proFieldCascaderProps
};
