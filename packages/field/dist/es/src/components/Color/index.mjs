import { defineComponent as t, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElColorPicker as u } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.1_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/color-picker.scss.mjs";
import { proFieldColor as p } from "./props.mjs";
const i = /* @__PURE__ */ t((o, l) => {
  const r = m({
    get: () => o.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => a(u, d({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldColor"
});
i.props = p;
export {
  i as ProFieldColor,
  i as default,
  p as proFieldColor
};
