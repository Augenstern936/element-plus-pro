import { defineComponent as o, createVNode as t } from "vue";
import { ElAvatar as e } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.1_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/avatar.scss.mjs";
import { proFieldAvatar as a } from "./props.mjs";
const m = /* @__PURE__ */ o((r) => () => t(e, r, null), {
  name: "ProFieldAvatar"
});
m.props = a;
export {
  m as ProFieldAvatar,
  m as default,
  a as proFieldAvatar
};
