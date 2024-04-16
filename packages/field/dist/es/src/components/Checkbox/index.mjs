import { defineComponent as c, computed as p, createVNode as o, Fragment as n, mergeProps as a } from "vue";
import { ElCheckboxGroup as i, ElCheckbox as k, ElCheckboxButton as b } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/checkbox-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/checkbox-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/checkbox.scss.mjs";
import { proFieldCheckboxProps as x } from "./typing.mjs";
const u = /* @__PURE__ */ c((t, d) => {
  const r = p({
    get: () => t.modelValue,
    set: (e) => {
      d.emit("update:modelValue", e);
    }
  });
  return () => o(i, {
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((l, m) => o(n, null, [t.type == "checkbox" ? o(k, a(l, {
        key: m
      }), null) : o(b, a(l, {
        key: m
      }), {
        default: () => [l.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
u.props = x;
const V = u;
export {
  u as ProFieldCheckbox,
  V as default,
  x as proFieldCheckboxProps
};
