import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElColorPicker } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/color-picker.scss.mjs";
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
const ProFieldColor$1 = ProFieldColor;
export {
  ProFieldColor,
  ProFieldColor$1 as default,
  proFieldColor
};
