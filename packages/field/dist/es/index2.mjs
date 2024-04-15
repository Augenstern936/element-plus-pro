import { defineComponent as r, computed as a, createVNode as m, mergeProps as d } from "vue";
import { ElTreeSelect as u } from "element-plus";
const i = /* @__PURE__ */ r((t, o) => {
  const l = a({
    get: () => t.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => m(u, d({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTreeSelect"
});
export {
  i as ProFieldTreeSelect,
  i as default
};
