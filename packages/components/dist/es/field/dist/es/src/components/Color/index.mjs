import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElColorPicker } from "element-plus";
import { proFieldColor } from "./typing.mjs";
const ProFieldColor = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElColorPicker, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldColor"
});
ProFieldColor.props = proFieldColor;
export {
  ProFieldColor,
  ProFieldColor as default,
  proFieldColor
};
