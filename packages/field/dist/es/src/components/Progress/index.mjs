import { defineComponent as e, createVNode as s } from "vue";
import { ElProgress as t } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/progress.scss.mjs";
import { proFieldProgressProps as p } from "./typing.mjs";
const r = /* @__PURE__ */ e((o) => () => s(t, o, null), {
  name: "ProFieldProgress"
});
r.props = p;
const n = r;
export {
  r as ProFieldProgress,
  n as default,
  p as proFieldProgressProps
};
