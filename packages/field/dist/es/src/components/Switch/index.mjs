import { defineComponent as l, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElSwitch as i } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/switch.scss.mjs";
import { proFieldSwitchProps as p } from "./props.mjs";
const u = /* @__PURE__ */ l((o, r) => {
  const t = m({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(i, d({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldSwitch"
});
u.props = p;
export {
  u as ProFieldSwitch,
  u as default,
  p as proFieldSwitchProps
};
