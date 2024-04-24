import { defineComponent, createVNode } from "vue";
import { ElAvatar } from "element-plus";
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
