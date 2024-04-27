import { defineComponent as r, computed as l, createVNode as m, mergeProps as p } from "vue";
import { ElRate as d } from "element-plus";
import { proFieldRateProps as s } from "./pro-components24.mjs";
const u = /* @__PURE__ */ r((o, a) => {
  const t = l({
    get: () => o.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => m(d, p({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldRate"
});
u.props = s;
export {
  u as ProFieldRate,
  u as default,
  s as proFieldRateProps
};
