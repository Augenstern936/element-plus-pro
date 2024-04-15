import { defineComponent as e, createVNode as o } from "vue";
import { progressProps as s, ElProgress as t } from "element-plus";
const p = {
  ...s,
  style: {
    type: Object,
    default: {}
  }
}, l = /* @__PURE__ */ e((r) => () => o(t, r, null), {
  name: "ProFieldProgress"
});
l.props = p;
export {
  l as ProFieldProgress,
  l as default,
  p as proFieldProgressProps
};
