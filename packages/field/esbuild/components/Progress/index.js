import { ElProgress } from "element-plus";
import "element-plus/theme-chalk/src/progress.scss";
import { defineComponent } from "vue";
import { proFieldProgressProps } from "./typing";
const ProFieldProgress = defineComponent(
  (props) => {
    return () => /* @__PURE__ */ React.createElement(ElProgress, { ...props });
  },
  {
    name: "ProFieldProgress"
  }
);
ProFieldProgress.props = proFieldProgressProps;
export * from "./typing";
var Progress_default = ProFieldProgress;
export {
  ProFieldProgress,
  Progress_default as default
};
