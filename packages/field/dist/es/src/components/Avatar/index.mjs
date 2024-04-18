import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElAvatar } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/avatar.scss.mjs";
import { proFieldAvatar } from "./typing.mjs";
import { defineComponent, createVNode } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const ProFieldAvatar = /* @__PURE__ */ defineComponent((props) => {
  return () => createVNode(ElAvatar, props, null);
}, {
  name: "ProFieldAvatar"
});
ProFieldAvatar.props = proFieldAvatar;
const ProFieldAvatar$1 = ProFieldAvatar;
export {
  ProFieldAvatar,
  ProFieldAvatar$1 as default,
  proFieldAvatar
};
