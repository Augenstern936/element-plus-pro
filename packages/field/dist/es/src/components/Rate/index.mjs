import { defineComponent as l, computed as m, createVNode as d, mergeProps as p } from "vue";
import { ElRate as u } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/rate.scss.mjs";
import { proFieldRateProps as n } from "./typing.mjs";
const r = /* @__PURE__ */ l((o, a) => {
  const t = m({
    get: () => o.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => d(u, p({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldRate"
});
r.props = n;
const P = r;
export {
  r as ProFieldRate,
  P as default,
  n as proFieldRateProps
};
