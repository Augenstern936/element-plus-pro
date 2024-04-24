import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElCascader } from "element-plus";
import { proFieldCascaderProps } from "./typing.mjs";
const ProFieldCascader = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElCascader, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldCascader"
});
ProFieldCascader.props = proFieldCascaderProps;
export {
  ProFieldCascader,
  ProFieldCascader as default,
  proFieldCascaderProps
};
