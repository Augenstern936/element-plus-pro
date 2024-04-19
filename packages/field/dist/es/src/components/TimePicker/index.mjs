import { createVNode, mergeProps, defineComponent, computed } from "vue";
import { timePickerDefaultProps, ElTimePicker } from "element-plus";
import "../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/time-picker.scss.mjs";
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
