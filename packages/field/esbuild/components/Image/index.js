import { ElImage } from "element-plus";
import "element-plus/theme-chalk/src/image.scss";
import { defineComponent } from "vue";
import { proFieldImageProps } from "./typing";
const ProFieldImage = defineComponent(
  (props) => {
    return () => /* @__PURE__ */ React.createElement(ElImage, { ...props });
  },
  {
    name: "ProFieldImage"
  }
);
ProFieldImage.props = proFieldImageProps;
export * from "./typing";
var Image_default = ProFieldImage;
export {
  ProFieldImage,
  Image_default as default
};
