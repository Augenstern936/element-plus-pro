import { defineComponent as t, computed as a, createVNode as m, mergeProps as d } from "vue";
import { ElColorPicker as p } from "element-plus";
import { proFieldColor as i } from "./pro-components20.mjs";
const u = /* @__PURE__ */ t((o, l) => {
  const r = a({
    get: () => o.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => m(p, d({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldColor"
});
u.props = i;
export {
  u as ProFieldColor,
  u as default,
  i as proFieldColor
};
