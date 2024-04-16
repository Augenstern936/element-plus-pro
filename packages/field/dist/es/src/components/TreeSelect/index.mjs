import { defineComponent as r, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElTreeSelect as u } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/tree-select.scss.mjs";
const n = /* @__PURE__ */ r((t, o) => {
  const l = m({
    get: () => t.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(u, d({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTreeSelect"
}), s = n;
export {
  n as ProFieldTreeSelect,
  s as default
};
