import { createVNode as o, mergeProps as t, defineComponent as n, computed as s } from "vue";
import { ElInput as u } from "element-plus";
import { proInputProps as d } from "./pro-components33.mjs";
const r = /* @__PURE__ */ n((e, a) => {
  const p = s({
    get: () => e.modelValue,
    set: (l) => {
      a.emit("update:modelValue", l);
    }
  });
  return () => o(u, t({
    modelValue: p.value,
    "onUpdate:modelValue": (l) => p.value = l
  }, e), null);
}, {
  name: "ProFieldInput"
});
r.props = d;
const x = (e) => o(r, t(e, {
  type: "text"
}), null), V = (e) => o(r, t(e, {
  type: "password"
}), null), c = (e) => o(r, t(e, {
  type: "textarea"
}), null);
export {
  V as ProFieldPassword,
  x as ProFieldText,
  c as ProFieldTextarea,
  d as proInputProps
};
