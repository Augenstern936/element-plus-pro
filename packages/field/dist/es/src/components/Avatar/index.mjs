import { defineComponent, createVNode } from "vue";
import { ElAvatar } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/avatar.scss.mjs";
import { proFieldAvatar } from "./typing.mjs";
const ProFieldAvatar = /* @__PURE__ */ defineComponent((props) => {
  return () => createVNode(ElAvatar, props, null);
}, {
  name: "ProFieldAvatar"
});
ProFieldAvatar.props = proFieldAvatar;
export {
  ProFieldAvatar,
  ProFieldAvatar as default,
  proFieldAvatar
};
