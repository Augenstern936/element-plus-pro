import { defineComponent as r, computed as a, createVNode as m, mergeProps as d } from "vue";
import { ElTreeSelect as u } from "element-plus";
const c = /* @__PURE__ */ r((l, t) => {
  const o = a({
    get: () => l.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  });
  return () => m(u, d({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, l), null);
}, {
  name: "ProFieldTreeSelect"
});
export {
  c as ProFieldTreeSelect,
  c as default
};
