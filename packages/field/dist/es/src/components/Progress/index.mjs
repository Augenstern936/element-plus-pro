import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { ElProgress } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/progress.scss.mjs";
import { proFieldProgressProps } from "./typing.mjs";
import { defineComponent, createVNode } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const ProFieldProgress = /* @__PURE__ */ defineComponent((props) => {
  return () => createVNode(ElProgress, props, null);
}, {
  name: "ProFieldProgress"
});
ProFieldProgress.props = proFieldProgressProps;
const ProFieldProgress$1 = ProFieldProgress;
export {
  ProFieldProgress,
  ProFieldProgress$1 as default,
  proFieldProgressProps
};
