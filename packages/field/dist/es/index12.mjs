import { defineComponent as o, createVNode as r } from "vue";
import { imageProps as t, ElImage as m } from "element-plus";
const a = {
  ...t,
  style: {
    type: Object,
    default: {}
  }
}, p = /* @__PURE__ */ o((e) => () => r(m, e, null), {
  name: "ProFieldImage"
});
p.props = a;
export {
  p as ProFieldImage,
  p as default,
  a as proFieldImageProps
};
