import { defineComponent as c, computed as a, createVNode as i, mergeProps as m } from "vue";
import { withInstall as s, formatPlaceholder as y } from "@element-plus/pro-utils";
import { components as n } from "./components/index.mjs";
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
}, d = /* @__PURE__ */ c((t, r) => {
  const o = a(() => n[t.valueType || "text"]), l = a({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  }), p = a(() => {
    var u;
    const e = (u = t.placeholder) != null ? u : y("", t.valueType || "text");
    return Array.isArray(e) && e.length > 1 ? {
      startPlaceholder: e[0],
      endPlaceholder: e[1]
    } : {
      placeholder: Array.isArray(e) ? e[0] : e
    };
  });
  return () => i(o.value, m({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t.fieldProps, p.value), null);
}, {
  name: "ProField"
});
d.props = f;
for (const t in n) {
  const r = t.charAt(0).toUpperCase() + t.slice(1), o = n[t];
  d[r] = (l) => i(o, m(l, {
    type: t
  }), null);
}
const g = s(d);
export {
  g as default,
  f as proFieldProps
};
