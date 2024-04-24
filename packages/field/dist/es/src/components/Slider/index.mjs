import { defineComponent as t, computed as d, createVNode as m, mergeProps as a } from "vue";
import { ElSlider as i } from "element-plus";
import "../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/slider.scss.mjs";
import { proFieldSliderProps as p } from "./typing.mjs";
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
