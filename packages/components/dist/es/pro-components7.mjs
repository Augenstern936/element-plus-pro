import { defineComponent as d, computed as m, createVNode as o, Fragment as n, mergeProps as p } from "vue";
import { ElCheckboxGroup as c, ElCheckbox as s, ElCheckboxButton as i } from "element-plus";
import { proFieldCheckboxProps as k } from "./pro-components19.mjs";
const x = /* @__PURE__ */ d((l, u) => {
  const t = m({
    get: () => l.modelValue,
    set: (e) => {
      u.emit("update:modelValue", e);
    }
  });
  return () => o(c, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, {
    default: () => {
      var e;
      return [(e = l.options) == null ? void 0 : e.map((r, a) => o(n, null, [l.type == "checkbox" ? o(s, p(r, {
        key: a
      }), null) : o(i, p(r, {
        key: a
      }), {
        default: () => [r.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
x.props = k;
export {
  x as ProFieldCheckbox,
  x as default,
  k as proFieldCheckboxProps
};
