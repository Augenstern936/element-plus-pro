import { defineComponent as l, inject as r, ref as a, createVNode as n } from "vue";
import { ElColorPicker as m } from "element-plus";
const d = /* @__PURE__ */ l(() => {
  const o = r("color", {}), t = a("");
  return () => n(m, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e,
    onChange: (e) => o.emitter.emit("value-change", {
      field: o.formItem.dataField,
      value: e
    })
  }, null);
}), u = d;
export {
  u as default
};
