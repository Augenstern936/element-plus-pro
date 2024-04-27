import { defineComponent as m, computed as u, createVNode as a, mergeProps as n } from "vue";
import { ElSelect as p, ElOption as i } from "element-plus";
const c = /* @__PURE__ */ m((l, d) => {
  const o = u({
    get: () => l.modelValue,
    set: (e) => {
      d.emit("update:modelValue", e);
    }
  });
  return () => a(p, {
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, {
    default: () => {
      var e;
      return [(e = l.options) == null ? void 0 : e.map((t, r) => a(i, n(t, {
        key: r
      }), {
        default: () => [t.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), V = c;
export {
  c as ProFieldSelect,
  V as default
};
