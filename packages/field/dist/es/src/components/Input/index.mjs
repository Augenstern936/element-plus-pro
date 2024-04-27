import { createVNode as t, mergeProps as o, defineComponent as u, computed as a } from "vue";
import { ElInput as d } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/input.scss.mjs";
import { proInputProps as m } from "./props.mjs";
const r = /* @__PURE__ */ u((e, p) => {
  const n = a({
    get: () => e.modelValue,
    set: (l) => {
      p.emit("update:modelValue", l);
    }
  });
  return () => t(d, o({
    modelValue: n.value,
    "onUpdate:modelValue": (l) => n.value = l
  }, e), null);
}, {
  name: "ProFieldInput"
});
r.props = m;
const x = (e) => t(r, o(e, {
  type: "text"
}), null), F = (e) => t(r, o(e, {
  type: "password"
}), null), V = (e) => t(r, o(e, {
  type: "textarea"
}), null);
export {
  F as ProFieldPassword,
  x as ProFieldText,
  V as ProFieldTextarea,
  m as proInputProps
};
