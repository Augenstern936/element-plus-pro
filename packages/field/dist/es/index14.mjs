import { defineComponent as t, computed as a, createVNode as d, mergeProps as m } from "vue";
import { colorPickerProps as u, ElColorPicker as c } from "element-plus";
const n = {
  ...u,
  style: {
    type: Object,
    default: {}
  }
}, p = /* @__PURE__ */ t((o, r) => {
  const l = a({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => d(c, m({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, o), null);
}, {
  name: "ProFieldColor"
});
p.props = n;
export {
  p as ProFieldColor,
  p as default,
  n as proFieldColor
};
