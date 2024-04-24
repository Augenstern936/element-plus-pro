import { defineComponent, createVNode } from "vue";
import { ElImage } from "element-plus";
import { proFieldImageProps } from "./typing.mjs";
const ProFieldImage = /* @__PURE__ */ defineComponent((props) => {
  return () => createVNode(ElImage, props, null);
}, {
  name: "ProFieldImage"
});
ProFieldImage.props = proFieldImageProps;
export {
  ProFieldImage,
  ProFieldImage as default,
  proFieldImageProps
};
