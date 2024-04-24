import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElRate } from "element-plus";
import { proFieldRateProps } from "./typing.mjs";
const ProFieldRate = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  return () => createVNode(ElRate, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
}, {
  name: "ProFieldRate"
});
ProFieldRate.props = proFieldRateProps;
export {
  ProFieldRate,
  ProFieldRate as default,
  proFieldRateProps
};
