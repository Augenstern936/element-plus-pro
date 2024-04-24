import { defineComponent as a, computed as l, createVNode as m, mergeProps as d } from "vue";
import { ElRate as p } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/rate.scss.mjs";
import { proFieldRateProps as u } from "./typing.mjs";
const n = /* @__PURE__ */ a((o, r) => {
  const t = l({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => m(p, d({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldRate"
});
n.props = u;
export {
  n as ProFieldRate,
  n as default,
  u as proFieldRateProps
};
