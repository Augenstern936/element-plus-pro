import { defineComponent as m, computed as i, createVNode as d, mergeProps as a } from "vue";
import { ElSwitch as p } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/switch.scss.mjs";
import { proFieldSwitchProps as u } from "./typing.mjs";
const r = /* @__PURE__ */ m((o, l) => {
  const t = i({
    get: () => o.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => d(p, a({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldSwitch"
});
r.props = u;
const h = r;
export {
  r as ProFieldSwitch,
  h as default,
  u as proFieldSwitchProps
};
