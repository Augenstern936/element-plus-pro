import { defineComponent, createVNode } from "vue";
import { ElProgress } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/progress.scss.mjs";
import { proFieldProgressProps } from "./typing.mjs";
const ProFieldProgress = /* @__PURE__ */ defineComponent((props) => {
  return () => createVNode(ElProgress, props, null);
}, {
  name: "ProFieldProgress"
});
ProFieldProgress.props = proFieldProgressProps;
export {
  ProFieldProgress,
  ProFieldProgress as default,
  proFieldProgressProps
};
