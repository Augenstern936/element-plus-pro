import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElSlider } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/slider.scss.mjs";
import { proFieldSliderProps } from "./typing.mjs";
const ProFieldSlider = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElSlider, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldSlider"
});
ProFieldSlider.props = proFieldSliderProps;
const ProFieldSlider$1 = ProFieldSlider;
export {
  ProFieldSlider,
  ProFieldSlider$1 as default,
  proFieldSliderProps
};
