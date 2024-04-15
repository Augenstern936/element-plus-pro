import { defineComponent as c, computed as n, createVNode as a, mergeProps as p } from "vue";
import { checkboxProps as u, ElSelect as m, ElOption as s } from "element-plus";
const y = {
  ...u,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
}, P = /* @__PURE__ */ c((t, r) => {
  const o = n({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(m, {
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((l, d) => a(s, p(l, {
        key: d
      }), {
        default: () => [l.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
});
export {
  P as ProFieldSelect,
  P as default,
  y as proFieldCheckboxProps
};
