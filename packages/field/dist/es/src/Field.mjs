import { createVNode, mergeProps, defineComponent, computed } from "vue";
import { withInstall, formatPlaceholder } from "@element-plus/pro-utils";
import { components } from "./components/index.mjs";
import { proFieldProps } from "./typing.mjs";
import { proFieldAvatar } from "./components/Avatar/typing.mjs";
import { ProFieldAvatar } from "./components/Avatar/index.mjs";
import { proFieldCascaderProps } from "./components/Cascader/typing.mjs";
import { ProFieldCascader } from "./components/Cascader/index.mjs";
import { proFieldCheckboxProps } from "./components/Checkbox/typing.mjs";
import { ProFieldCheckbox } from "./components/Checkbox/index.mjs";
import { proFieldColor } from "./components/Color/typing.mjs";
import { ProFieldColor } from "./components/Color/index.mjs";
import { proFieldImageProps } from "./components/Image/typing.mjs";
import { ProFieldImage } from "./components/Image/index.mjs";
import { proFieldProgressProps } from "./components/Progress/typing.mjs";
import { ProFieldProgress } from "./components/Progress/index.mjs";
import { proFieldRadioProps } from "./components/Radio/typing.mjs";
import { ProFieldRadio } from "./components/Radio/index.mjs";
import { proFieldRateProps } from "./components/Rate/typing.mjs";
import { ProFieldRate } from "./components/Rate/index.mjs";
import { proFieldSliderProps } from "./components/Slider/typing.mjs";
import { ProFieldSlider } from "./components/Slider/index.mjs";
import { proFieldSwitchProps } from "./components/Switch/typing.mjs";
import { ProFieldSwitch } from "./components/Switch/index.mjs";
import { ProFieldTreeSelect } from "./components/TreeSelect/index.mjs";
const ProField = /* @__PURE__ */ defineComponent((props, ctx) => {
  const Field = computed(() => {
    return components[props.valueType || "text"];
  });
  const model = computed({
    get: () => {
      return props.modelValue;
    },
    set: (value) => {
      ctx.emit("update:modelValue", value);
    }
  });
  const placeholder = computed(() => {
    var _a;
    const value = (_a = props.placeholder) != null ? _a : formatPlaceholder("", props.valueType || "text");
    if (Array.isArray(value) && value.length > 1) {
      return {
        startPlaceholder: value[0],
        endPlaceholder: value[1]
      };
    }
    return {
      placeholder: Array.isArray(value) ? value[0] : value
    };
  });
  return () => createVNode(Field.value, mergeProps({
    "modelValue": model.value,
    "onUpdate:modelValue": ($event) => model.value = $event
  }, props.fieldProps, placeholder.value), null);
}, {
  name: "ProField"
});
ProField.props = proFieldProps;
for (const key in components) {
  const ComName = key.charAt(0).toUpperCase() + key.slice(1);
  const FieldComponent = components[key];
  ProField[ComName] = (props) => createVNode(FieldComponent, mergeProps(props, {
    "type": key
  }), null);
}
const ProField$1 = withInstall(ProField);
export {
  ProFieldAvatar,
  ProFieldCascader,
  ProFieldCheckbox,
  ProFieldColor,
  ProFieldImage,
  ProFieldProgress,
  ProFieldRadio,
  ProFieldRate,
  ProFieldSlider,
  ProFieldSwitch,
  ProFieldTreeSelect,
  components,
  ProField$1 as default,
  proFieldAvatar,
  proFieldCascaderProps,
  proFieldCheckboxProps,
  proFieldColor,
  proFieldImageProps,
  proFieldProgressProps,
  proFieldRadioProps,
  proFieldRateProps,
  proFieldSliderProps,
  proFieldSwitchProps
};
