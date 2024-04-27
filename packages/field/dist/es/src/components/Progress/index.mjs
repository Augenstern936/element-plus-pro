import { defineComponent as o, createVNode as e } from "vue";
import { ElProgress as s } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/progress.scss.mjs";
import { proFieldProgressProps as p } from "./props.mjs";
const t = /* @__PURE__ */ o((r) => () => e(s, r, null), {
  name: "ProFieldProgress"
});
t.props = p;
export {
  t as ProFieldProgress,
  t as default,
  p as proFieldProgressProps
};
