import { defineComponent as t, computed as d, createVNode as l, mergeProps as m } from "vue";
import { ElCascader as p } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/cascader.scss.mjs";
import { proFieldCascaderProps as u } from "./typing.mjs";
const s = /* @__PURE__ */ t((o, a) => {
  const r = d({
    get: () => o.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => l(p, m({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldCascader"
});
s.props = u;
export {
  s as ProFieldCascader,
  s as default,
  u as proFieldCascaderProps
};
