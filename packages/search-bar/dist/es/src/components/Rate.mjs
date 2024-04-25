import { defineComponent as o, inject as l, ref as n, createVNode as r } from "vue";
import { ElRate as m } from "element-plus";
const d = /* @__PURE__ */ o(() => {
  const t = l("rate", {}), a = n(0);
  return () => r(m, {
    modelValue: a.value,
    "onUpdate:modelValue": (e) => a.value = e,
    onChange: (e) => t.emitter.emit("value-change", {
      field: t.formItem.dataField,
      value: e
    })
  }, null);
}), c = d;
export {
  c as default
};
