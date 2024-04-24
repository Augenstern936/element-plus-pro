import { createVNode, mergeProps, defineComponent, computed } from "vue";
import { timePickerDefaultProps, ElTimePicker } from "element-plus";
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
