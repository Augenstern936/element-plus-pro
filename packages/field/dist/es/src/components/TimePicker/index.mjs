import "../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.mjs";
import { timePickerDefaultProps, ElTimePicker } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/time-picker.scss.mjs";
import { createVNode, mergeProps, defineComponent, computed } from "../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.mjs";
const BaseTimePicker = /* @__PURE__ */ defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("upTime:modelValue", value);
    }
  });
  return () => createVNode(ElTimePicker, mergeProps({
    "modelValue": state.value,
    "onUpdate:modelValue": ($event) => state.value = $event
  }, props), null);
});
BaseTimePicker.props = {
  ...timePickerDefaultProps,
  style: {
    type: Object,
    default: {}
  }
};
const ProFieldTime = (props) => {
  return createVNode(BaseTimePicker, mergeProps(props, {
    "isRange": false
  }), null);
};
const ProFieldTimeRange = (props) => {
  return createVNode(BaseTimePicker, mergeProps(props, {
    "isRange": true
  }), null);
};
export {
  ProFieldTime,
  ProFieldTimeRange
};
