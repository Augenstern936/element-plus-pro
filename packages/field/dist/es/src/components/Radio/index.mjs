import { defineComponent as m, computed as u, createVNode as l, Fragment as i, mergeProps as p } from "vue";
import { ElRadioGroup as n, ElRadio as f, ElRadioButton as s } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.1_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/radio-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.7.1_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/radio-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.7.1_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/radio.scss.mjs";
import { proFieldRadioProps as R } from "./props.mjs";
const V = /* @__PURE__ */ m((o, d) => {
  const t = u({
    get: () => o.modelValue,
    set: (e) => {
      d.emit("update:modelValue", e);
    }
  });
  return () => l(n, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, {
    default: () => {
      var e;
      return [(e = o.options) == null ? void 0 : e.map((a, r) => l(i, null, [a.type == "radio" ? l(f, p(a, {
        key: r
      }), {
        default: () => [a.label]
      }) : l(s, {
        label: a.value,
        key: r
      }, {
        default: () => [a.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
V.props = R;
export {
  V as ProFieldRadio,
  V as default,
  R as proFieldRadioProps
};
