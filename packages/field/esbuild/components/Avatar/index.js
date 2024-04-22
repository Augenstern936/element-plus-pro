import { ElAvatar } from "element-plus";
import "element-plus/theme-chalk/src/avatar.scss";
import { defineComponent } from "vue";
import { proFieldAvatar } from "./typing";
const ProFieldAvatar = defineComponent(
  (props) => {
    return () => /* @__PURE__ */ React.createElement(ElAvatar, { ...props });
  },
  {
    name: "ProFieldAvatar"
  }
);
ProFieldAvatar.props = proFieldAvatar;
export * from "./typing";
var Avatar_default = ProFieldAvatar;
export {
  ProFieldAvatar,
  Avatar_default as default
};
