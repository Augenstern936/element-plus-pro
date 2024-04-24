import { defineComponent, createVNode } from "vue";
import { ElProgress } from "element-plus";
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
