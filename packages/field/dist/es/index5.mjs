import { defineComponent as r, computed as a, createVNode as d, mergeProps as c } from "vue";
import { switchProps as i, ElSwitch as m } from "element-plus";
const s = {
  ...i,
  style: {
    type: Object,
    default: {}
  }
}, u = /* @__PURE__ */ r((t, l) => {
  const o = a({
    get: () => t.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => d(m, c({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, t), null);
}, {
  name: "ProFieldSwitch"
});
u.props = s;
export {
  u as ProFieldSwitch,
  u as default,
  s as proFieldSwitchProps
};
