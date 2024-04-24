import { defineComponent, computed, createVNode, mergeProps } from "vue";
import { ElCascader } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/cascader.scss.mjs";
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
