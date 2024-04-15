import { defineComponent as r, computed as d, createVNode as a, mergeProps as i } from "vue";
import { sliderProps as m, ElSlider as s } from "element-plus";
const u = {
  ...m,
  style: {
    type: Object,
    default: {}
  }
}, n = /* @__PURE__ */ r((l, t) => {
  const o = d({
    get: () => l.modelValue,
    set: (e) => {
      t.emit("update:modelValue", e);
    }
  });
  return () => a(s, i({
    modelValue: o.value,
    "onUpdate:modelValue": (e) => o.value = e
  }, l), null);
}, {
  name: "ProFieldSlider"
});
n.props = u;
export {
  n as ProFieldSlider,
  n as default,
  u as proFieldSliderProps
};
