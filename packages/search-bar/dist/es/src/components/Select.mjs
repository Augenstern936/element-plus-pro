import { defineComponent as m, inject as n, ref as c, createVNode as o, mergeProps as d } from "vue";
import { ElSelect as p, ElOption as f } from "element-plus";
import { formatPlaceholder as u } from "@element-plus/pro-utils";
const i = /* @__PURE__ */ m(() => {
  const t = n("select", {}), l = c("");
  return () => o(p, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e,
    placeholder: u(t.formItem.label, "select"),
    clearable: !0,
    onChange: (e) => t.emitter.emit("value-change", {
      field: t.formItem.dataField,
      value: e
    })
  }, {
    default: () => {
      var e;
      return [(e = t.formItem.valueOptions) == null ? void 0 : e.map((a, r) => o(f, d(a, {
        key: r
      }), null))];
    }
  });
}), g = i;
export {
  g as default
};
