import { ElTimePicker, timePickerDefaultProps } from "element-plus";
import "element-plus/theme-chalk/src/time-picker.scss";
import { computed, defineComponent } from "vue";
const BaseTimePicker = defineComponent((props, ctx) => {
  const state = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("upTime:modelValue", value);
    }
  });
  return () => /* @__PURE__ */ React.createElement(ElTimePicker, { "v-model": state.value, ...props });
});
BaseTimePicker.props = {
  ...timePickerDefaultProps,
  style: {
    type: Object,
    default: {}
  }
};
const ProFieldTime = (props) => {
  return /* @__PURE__ */ React.createElement(BaseTimePicker, { ...props, isRange: false });
};
const ProFieldTimeRange = (props) => {
  return /* @__PURE__ */ React.createElement(BaseTimePicker, { ...props, isRange: true });
};
export {
  ProFieldTime,
  ProFieldTimeRange
};
