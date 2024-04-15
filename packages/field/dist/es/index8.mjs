import { defineComponent as l, computed as r, createVNode as d, mergeProps as m } from "vue";
import { rateProps as u, ElRate as n } from "element-plus";
const p = {
  ...u,
  style: {
    type: Object,
    default: {}
  }
}, s = /* @__PURE__ */ l((t, a) => {
  const o = r({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => d(n, m({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, t), null);
}, {
  name: "ProFieldRate"
});
s.props = p;
export {
  s as ProFieldRate,
  s as default,
  p as proFieldRateProps
};
