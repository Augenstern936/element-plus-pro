import { defineComponent as u, computed as i, createVNode as a, Fragment as p, mergeProps as n } from "vue";
import { radioProps as m, ElRadioGroup as s, ElRadio as f, ElRadioButton as c } from "element-plus";
const y = {
  ...m,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
}, R = /* @__PURE__ */ u((o, r) => {
  const l = i({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(s, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = o.options) == null ? void 0 : e.map((t, d) => a(p, null, [t.type == "radio" ? a(f, n(t, {
        key: d
      }), {
        default: () => [t.label]
      }) : a(c, {
        label: t.value,
        key: d
      }, {
        default: () => [t.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
R.props = y;
export {
  R as ProFieldRadio,
  R as default,
  y as proFieldRadioProps
};
