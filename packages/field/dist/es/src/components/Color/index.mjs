import { defineComponent as m, computed as d, createVNode as a, mergeProps as u } from "vue";
import { ElColorPicker as i } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/color-picker.scss.mjs";
import { proFieldColor as n } from "./typing.mjs";
const l = /* @__PURE__ */ m((o, t) => {
  const r = d({
    get: () => o.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  });
  return () => a(i, u({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldColor"
});
l.props = n;
const f = l;
export {
  l as ProFieldColor,
  f as default,
  n as proFieldColor
};
