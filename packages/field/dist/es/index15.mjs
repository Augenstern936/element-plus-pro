import { defineComponent as n, computed as d, createVNode as o, Fragment as p, mergeProps as r } from "vue";
import { checkboxProps as m, ElCheckboxGroup as b, ElCheckbox as k, ElCheckboxButton as s } from "element-plus";
const x = {
  ...m,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
}, h = /* @__PURE__ */ n((t, u) => {
  const c = d({
    get: () => t.modelValue,
    set: (e) => {
      u.emit("update:modelValue", e);
    }
  });
  return () => o(b, {
    modelValue: c.value,
    "onUpdate:modelValue": (e) => c.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((l, a) => o(p, null, [t.type == "checkbox" ? o(k, r(l, {
        key: a
      }), null) : o(s, r(l, {
        key: a
      }), {
        default: () => [l.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
h.props = x;
export {
  h as ProFieldCheckbox,
  h as default,
  x as proFieldCheckboxProps
};
