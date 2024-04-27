import { defineComponent as t, computed as d, createVNode as m, mergeProps as a } from "vue";
import { ElSlider as i } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/slider.scss.mjs";
import { proFieldSliderProps as p } from "./props.mjs";
const u = /* @__PURE__ */ t((o, l) => {
  const r = d({
    get: () => o.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => m(i, a({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldSlider"
});
u.props = p;
export {
  u as ProFieldSlider,
  u as default,
  p as proFieldSliderProps
};
