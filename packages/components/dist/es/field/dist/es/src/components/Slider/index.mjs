import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElSlider } from "element-plus";
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
export {
  ProFieldSlider,
  ProFieldSlider as default,
  proFieldSliderProps
};
