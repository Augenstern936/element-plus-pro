import { defineComponent as l, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElSwitch as i } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/switch.scss.mjs";
import { proFieldSwitchProps as p } from "./typing.mjs";
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
