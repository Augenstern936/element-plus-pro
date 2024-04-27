import { defineComponent as d, computed as p, createVNode as o, Fragment as c, mergeProps as a } from "vue";
import { ElCheckboxGroup as n, ElCheckbox as i, ElCheckboxButton as k } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/checkbox-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/checkbox-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/checkbox.scss.mjs";
import { proFieldCheckboxProps as b } from "./props.mjs";
const x = /* @__PURE__ */ d((t, u) => {
  const r = p({
    get: () => t.modelValue,
    set: (e) => {
      u.emit("update:modelValue", e);
    }
  });
  return () => o(n, {
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((l, m) => o(c, null, [t.type == "checkbox" ? o(i, a(l, {
        key: m
      }), null) : o(k, a(l, {
        key: m
      }), {
        default: () => [l.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
x.props = b;
export {
  x as ProFieldCheckbox,
  x as default,
  b as proFieldCheckboxProps
};
