import { defineComponent as d, computed as l, createVNode as s, mergeProps as t } from "vue";
import { ElCascader as m } from "element-plus";
import { proFieldCascaderProps as p } from "./pro-components18.mjs";
const u = /* @__PURE__ */ d((o, r) => {
  const a = l({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => s(m, t({
    modelValue: a.value,
    "onUpdate:modelValue": (e) => a.value = e
  }, o), null);
}, {
  name: "ProFieldCascader"
});
u.props = p;
export {
  u as ProFieldCascader,
  u as default,
  p as proFieldCascaderProps
};
