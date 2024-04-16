import { defineComponent as u, computed as i, createVNode as a, Fragment as p, mergeProps as n } from "vue";
import { ElRadioGroup as s, ElRadio as f, ElRadioButton as R } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/radio-button.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/radio-group.scss.mjs";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/radio.scss.mjs";
import { proFieldRadioProps as c } from "./typing.mjs";
const r = /* @__PURE__ */ u((l, m) => {
  const t = i({
    get: () => l.modelValue,
    set: (e) => {
      m.emit("update:modelValue", e);
    }
  });
  return () => a(s, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, {
    default: () => {
      var e;
      return [(e = l.options) == null ? void 0 : e.map((o, d) => a(p, null, [o.type == "radio" ? a(f, n(o, {
        key: d
      }), {
        default: () => [o.label]
      }) : a(R, {
        label: o.value,
        key: d
      }, {
        default: () => [o.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
r.props = c;
const y = r;
export {
  r as ProFieldRadio,
  y as default,
  c as proFieldRadioProps
};
