import { defineComponent as r, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElTreeSelect as u } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/tree-select.scss.mjs";
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
