import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElImage } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/image.scss.mjs";
import { proFieldImageProps } from "./typing.mjs";
import { defineComponent, createVNode } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const ProFieldImage = /* @__PURE__ */ defineComponent((props) => {
  return () => createVNode(ElImage, props, null);
}, {
  name: "ProFieldImage"
});
ProFieldImage.props = proFieldImageProps;
const ProFieldImage$1 = ProFieldImage;
export {
  ProFieldImage,
  ProFieldImage$1 as default,
  proFieldImageProps
};
