import { defineComponent as d, computed as t, createVNode as a, mergeProps as m } from "vue";
import { ElSlider as p } from "element-plus";
import { proFieldSliderProps as i } from "./pro-components25.mjs";
const u = /* @__PURE__ */ d((o, l) => {
  const r = t({
    get: () => o.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => a(p, m({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldSlider"
});
u.props = i;
export {
  u as ProFieldSlider,
  u as default,
  i as proFieldSliderProps
};
