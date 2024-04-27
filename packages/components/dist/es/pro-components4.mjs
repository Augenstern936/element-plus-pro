import { createVNode as u, mergeProps as s, defineComponent as i, computed as p } from "vue";
import { withInstall as c, formatPlaceholder as y } from "@element-plus/pro-utils";
import { components as d } from "./pro-components16.mjs";
const f = {
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: ""
  },
  mode: {
    type: String,
    default: "edit"
  },
  valueType: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: [String, Array]
  },
  fieldProps: {
    type: Object,
    default: {}
  }
}, n = /* @__PURE__ */ i((e, o) => {
  const a = p(() => d[e.valueType || "text"]), t = p({
    get: () => e.modelValue,
    set: (r) => {
      o.emit("update:modelValue", r);
    }
  }), m = p(() => {
    var r;
    const l = (r = e.placeholder) != null ? r : y("", e.valueType || "text");
    return Array.isArray(l) && l.length > 1 ? {
      startPlaceholder: l[0],
      endPlaceholder: l[1]
    } : {
      placeholder: Array.isArray(l) ? l[0] : l
    };
  });
  return () => u(a.value, s({
    modelValue: t.value,
    "onUpdate:modelValue": (r) => t.value = r
  }, e.fieldProps, m.value), null);
}, {
  name: "ProField"
});
n.props = f;
for (const e in d) {
  const o = e.charAt(0).toUpperCase() + e.slice(1), a = d[e];
  n[o] = (t) => u(a, s(t, {
    type: e
  }), null);
}
const P = c(n);
export {
  P as default,
  f as proFieldProps
};
