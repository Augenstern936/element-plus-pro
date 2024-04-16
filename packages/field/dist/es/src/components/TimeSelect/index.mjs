import { defineComponent as r, computed as i, createVNode as d, mergeProps as a } from "vue";
import { ElTimeSelect as p } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/time-select.scss.mjs";
import { proFieldTimeSelectProps as u } from "./typing.mjs";
const l = /* @__PURE__ */ r((o, m) => {
  const t = i({
    get: () => o.modelValue,
    set: (e) => {
      m.emit("upTime:modelValue", e);
    }
  });
  return () => d(p, a({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldTimeSelect"
});
l.props = u;
const f = l;
export {
  l as ProFieldTimeSelect,
  f as default,
  u as proFieldTimeSelectProps
};
