import { defineComponent as r, createVNode as m } from "vue";
import { ElImage as t } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/image.scss.mjs";
import { proFieldImageProps as p } from "./typing.mjs";
const e = /* @__PURE__ */ r((o) => () => m(t, o, null), {
  name: "ProFieldImage"
});
e.props = p;
const d = e;
export {
  e as ProFieldImage,
  d as default,
  p as proFieldImageProps
};
