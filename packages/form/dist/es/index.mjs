import T from "./Form.mjs";
import { defineComponent as d, computed as n, createVNode as a, mergeProps as c, Fragment as m } from "vue";
import { ElSelect as i, ElOption as P, ElRadioGroup as b, ElRadio as f, ElRadioButton as k, radioProps as V, ElCheckboxGroup as h, ElCheckbox as y, ElCheckboxButton as x, checkboxProps as S, ElTreeSelect as v } from "element-plus";
import { formatPlaceholder as E } from "@element-plus/pro-utils";
const g = /* @__PURE__ */ d((t, r) => {
  const l = n({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(i, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e,
    placeholder: E(t.label, "select")
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((o, u) => a(P, c(o, {
        key: u
      }), {
        default: () => [o.label]
      }))];
    }
  });
}, {
  name: "ProSelect"
}), $ = g;
const s = /* @__PURE__ */ d((t, r) => {
  const l = n({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(b, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((o, u) => a(m, null, [o.type == "radio" ? a(f, c(o, {
        key: u
      }), {
        default: () => [o.label]
      }) : a(k, {
        label: o.value,
        key: u
      }, {
        default: () => [o.label]
      })]))];
    }
  });
}, {
  name: "ProRadio"
});
s.props = {
  ...V,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  }
};
const A = s;
const p = /* @__PURE__ */ d((t, r) => {
  const l = n({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(h, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((o, u) => a(m, null, [t.type == "checkbox" ? a(y, c(o, {
        key: u
      }), null) : a(x, c(o, {
        key: u
      }), {
        default: () => [o.label]
      })]))];
    }
  });
}, {
  name: "ProCheckbox"
});
p.props = {
  ...S,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
};
const F = p;
const C = /* @__PURE__ */ d((t, r) => {
  const l = n({
    get: () => t.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => a(v, c({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProTreeSelect"
}), N = C;
export {
  F as ProCheckbox,
  T as ProForm,
  A as ProRadio,
  $ as ProSelect,
  N as ProTreeSelect,
  T as default
};
