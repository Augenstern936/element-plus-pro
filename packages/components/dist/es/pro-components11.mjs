import { defineComponent as i, computed as p, createVNode as l, Fragment as u, mergeProps as m } from "vue";
import { ElRadioGroup as n, ElRadio as s, ElRadioButton as f } from "element-plus";
import { proFieldRadioProps as R } from "./pro-components23.mjs";
const V = /* @__PURE__ */ i((a, r) => {
  const d = p({
    get: () => a.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => l(n, {
    modelValue: d.value,
    "onUpdate:modelValue": (e) => d.value = e
  }, {
    default: () => {
      var e;
      return [(e = a.options) == null ? void 0 : e.map((o, t) => l(u, null, [o.type == "radio" ? l(s, m(o, {
        key: t
      }), {
        default: () => [o.label]
      }) : l(f, {
        label: o.value,
        key: t
      }, {
        default: () => [o.label]
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
