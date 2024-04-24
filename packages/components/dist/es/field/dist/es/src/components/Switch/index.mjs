import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElSwitch } from "element-plus";
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
export {
  ProFieldSwitch,
  ProFieldSwitch as default,
  proFieldSwitchProps
};
