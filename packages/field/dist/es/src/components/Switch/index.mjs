import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElSwitch } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/switch.scss.mjs";
import { proFieldSwitchProps } from "./typing.mjs";
const ProFieldSwitch = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElSwitch, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldSwitch"
});
ProFieldSwitch.props = proFieldSwitchProps;
const ProFieldSwitch$1 = ProFieldSwitch;
export {
  ProFieldSwitch,
  ProFieldSwitch$1 as default,
  proFieldSwitchProps
};
