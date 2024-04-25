import { defineComponent as a, inject as l, ref as n, createVNode as i } from "vue";
import { ElSwitch as r } from "element-plus";
const c = /* @__PURE__ */ a(() => {
  const t = l("switch", {}), o = n(!1);
  return () => i(r, {
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e,
    onChange: (e) => t.emitter.emit("value-change", {
      field: t.formItem.dataField,
      value: e
    })
  }, null);
}), u = c;
export {
  u as default
};
