import { defineComponent as d, computed as l, createVNode as m, mergeProps as s } from "vue";
import { ElCascader as p } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/cascader.scss.mjs";
import { proFieldCascaderProps as u } from "./typing.mjs";
const a = /* @__PURE__ */ d((o, t) => {
  const r = l({
    get: () => o.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  });
  return () => m(p, s({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldCascader"
});
a.props = u;
const f = a;
export {
  a as ProFieldCascader,
  f as default,
  u as proFieldCascaderProps
};
