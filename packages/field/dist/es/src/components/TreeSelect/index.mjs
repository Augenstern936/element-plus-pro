import { defineComponent as r, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElTreeSelect as u } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/tree-select.scss.mjs";
const p = /* @__PURE__ */ r((t, o) => {
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
});
export {
  p as ProFieldTreeSelect,
  p as default
};
