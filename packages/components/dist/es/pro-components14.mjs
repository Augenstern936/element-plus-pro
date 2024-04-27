import { defineComponent as l, computed as a, createVNode as m, mergeProps as p } from "vue";
import { ElSwitch as d } from "element-plus";
import { proFieldSwitchProps as i } from "./pro-components26.mjs";
const u = /* @__PURE__ */ l((o, r) => {
  const t = a({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => m(d, p({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldSwitch"
});
u.props = i;
export {
  u as ProFieldSwitch,
  u as default,
  i as proFieldSwitchProps
};
