import { createVNode as t, mergeProps as r, defineComponent as p, computed as a } from "vue";
import { inputProps as d, ElInput as m } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/input.scss.mjs";
const o = /* @__PURE__ */ p((e, u) => {
  const n = a({
    get: () => e.modelValue,
    set: (l) => {
      u.emit("update:modelValue", l);
    }
  });
  return () => t(m, r({
    modelValue: n.value,
    "onUpdate:modelValue": (l) => n.value = l
  }, e), null);
});
o.props = {
  ...d,
  type: {
    type: String,
    default: "text"
  }
};
const P = (e) => t(o, r(e, {
  type: "text"
}), null), x = (e) => t(o, r(e, {
  type: "password"
}), null), y = (e) => t(o, r(e, {
  type: "textarea"
}), null);
export {
  x as ProFieldPassword,
  P as ProFieldText,
  y as ProFieldTextarea
};
