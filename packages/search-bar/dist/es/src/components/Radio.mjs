import { createVNode as t, defineComponent as r, inject as i, computed as p, Fragment as f, mergeProps as y } from "vue";
import { ElRadioGroup as c, ElRadio as g, ElRadioButton as R } from "element-plus";
const d = /* @__PURE__ */ r((l, n) => {
  const u = i(l.type, {}), o = p({
    get: () => l.modelValue,
    set: (e) => {
      n.emit("update:modelValue", e), u.emitter.emit("value-change", {
        field: u.formItem.dataField,
        value: e
      });
    }
  });
  return () => t(c, {
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, {
    default: () => {
      var e;
      return [(e = u.formItem.valueOptions) == null ? void 0 : e.map((a, m) => t(f, null, [l.type == "radio" ? t(g, y(a, {
        key: m
      }), {
        default: () => [a.label]
      }) : t(R, {
        label: a.value,
        key: m
      }, {
        default: () => [a.label]
      })]))];
    }
  });
});
d.props = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  type: {
    type: String,
    default: "radio"
  }
};
const v = {
  Default: () => t(d, {
    type: "radio"
  }, null),
  RadioButton: () => t(d, {
    type: "radioButton"
  }, null)
};
export {
  v as default
};
