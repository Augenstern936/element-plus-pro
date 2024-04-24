import { createVNode, mergeProps, defineComponent, computed } from "vue";
import { withInstall, formatPlaceholder } from "@element-plus/pro-utils";
import { components } from "./components/index.mjs";
import { proFieldProps } from "./typing.mjs";
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
  components,
  ProField$1 as default
};
