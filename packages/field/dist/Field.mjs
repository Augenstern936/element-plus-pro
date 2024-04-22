import { formatPlaceholder, withInstall } from "@element-plus/pro-utils";
import { computed, defineComponent } from "vue";
import components from "./components";
import { proFieldProps } from "./typing";
const ProField = defineComponent(
  (props, ctx) => {
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
      const value = props.placeholder ?? formatPlaceholder("", props.valueType || "text");
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
    return () => /* @__PURE__ */ React.createElement(Field.value, { "v-model": model.value, ...props.fieldProps, ...placeholder.value });
  },
  {
    name: "ProField"
  }
);
ProField.props = proFieldProps;
for (const key in components) {
  const ComName = key.charAt(0).toUpperCase() + key.slice(1);
  const FieldComponent = components[key];
  ProField[ComName] = (props) => /* @__PURE__ */ React.createElement(FieldComponent, { ...props, type: key });
}
export * from "./components";
var Field_default = withInstall(ProField);
export {
  Field_default as default
};
//# sourceMappingURL=Field.mjs.map