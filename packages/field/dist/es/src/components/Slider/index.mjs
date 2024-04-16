import { defineComponent as d, computed as m, createVNode as i, mergeProps as a } from "vue";
import { ElSlider as p } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/slider.scss.mjs";
import { proFieldSliderProps as u } from "./typing.mjs";
const l = /* @__PURE__ */ d((o, t) => {
  const r = m({
    get: () => o.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  });
  return () => i(p, a({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldSlider"
});
l.props = u;
const P = l;
export {
  l as ProFieldSlider,
  P as default,
  u as proFieldSliderProps
};
