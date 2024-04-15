import { defineComponent as p, computed as a, createVNode as t, mergeProps as o } from "vue";
import { inputProps as d, ElInput as s } from "element-plus";
const r = /* @__PURE__ */ p((e, u) => {
  const n = a({
    get: () => e.modelValue,
    set: (l) => {
      u.emit("update:modelValue", l);
    }
  });
  return () => t(s, o({
    modelValue: n.value,
    "onUpdate:modelValue": (l) => n.value = l
  }, e), null);
});
r.props = {
  ...d,
  type: {
    type: String,
    default: "text"
  }
};
const c = (e) => t(r, o(e, {
  type: "text"
}), null), P = (e) => t(r, o(e, {
  type: "password"
}), null), x = (e) => t(r, o(e, {
  type: "textarea"
}), null);
export {
  P as ProFieldPassword,
  c as ProFieldText,
  x as ProFieldTextarea
};
