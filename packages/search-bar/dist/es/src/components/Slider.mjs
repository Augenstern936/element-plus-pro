import { defineComponent as o, inject as a, ref as r, createVNode as d } from "vue";
import { ElSlider as n } from "element-plus";
const i = /* @__PURE__ */ o(() => {
  const t = a("slider", {}), l = r(0);
  return () => d(n, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e,
    style: {
      width: "100px",
      marginLeft: "12px"
    },
    onChange: (e) => t.emitter.emit("value-change", {
      field: t.formItem.dataField,
      value: e
    })
  }, null);
}), u = i;
export {
  u as default
};
