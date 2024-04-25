import { createVNode as e, defineComponent as n, inject as p, ref as u } from "vue";
import { ElInput as d } from "element-plus";
import { formatPlaceholder as m } from "@element-plus/pro-utils";
const t = /* @__PURE__ */ n(({
  type: l
}) => {
  const a = p(l, {}), r = u("");
  return () => e(d, {
    modelValue: r.value,
    "onUpdate:modelValue": (o) => r.value = o,
    placeholder: m(a.formItem.label, l),
    clearable: !0,
    type: l,
    onInput: (o) => a.emitter.emit("value-change", {
      field: a.formItem.dataField,
      value: o
    })
  }, null);
});
t.props = {
  type: {
    type: String,
    default: "text"
  }
};
const i = {
  Text: () => e(t, {
    type: "text"
  }, null),
  Password: () => e(t, {
    type: "password"
  }, null),
  Textarea: () => e(t, {
    type: "textarea"
  }, null)
};
export {
  i as default
};
