/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-08-29 11:54:51
 * @FilePath: \element-plus-pro\packages\field\src\Field.tsx
 */
import type { GeneratePropTypes, ToUppercaseFirst } from "@element-plus-ui/pro-types";
import { formatPlaceholder, withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import "element-plus/theme-chalk/src/base.scss";
import type { DefineComponent } from "vue-demi";
import { computed, defineComponent } from "vue-demi";
import components from "./components";
import { proFieldProps } from "./props";
import type { FieldProps, ProFieldSuperProps, ProFieldType } from "./typing";

export type ProFieldProps = Omit<GeneratePropTypes<typeof proFieldProps>, "type" | "fieldProps"> & FieldProps;

function getPlaceholder(type: ProFieldType, placeholder?: string | [string] | [string, string]) {
  const value = placeholder ?? (formatPlaceholder("", type) as string | [string, string]);

  if (Array.isArray(value) && value.length > 1) {
    return {
      startPlaceholder: value[0],
      endPlaceholder: value[1]
    };
  }

  return {
    placeholder: Array.isArray(value) ? value[0] : value
  };
}

const ProField = defineComponent<ProFieldProps>(
  (props, ctx) => {
    const Field = computed(() => {
      return (components[props.type || "text"] ?? components.text) as DefineComponent;
    });

    const empty = computed(() => {
      const types = ["slider", "number", "rate", "switch"];
      if (!props.modelValue && !types.includes(props.type ?? "")) {
        return props.emptyText;
      }
      return props.modelValue;
    });

    const model = props.mode === "read" ? empty : useVModel(props, "modelValue", ctx.emit);

    return () => (
      <Field.value
        {...props}
        {...(props.fieldProps || {})}
        {...getPlaceholder(props.type as ProFieldType, props.placeholder)}
        v-model={model.value}
      />
    );
  },
  {
    name: "ProField"
  }
) as ProFieldSuperProps<ProFieldProps>;

ProField.props = proFieldProps as any;

for (const key in components) {
  const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFieldType>;
  const FieldComponent = components[key as ProFieldType];
  ProField[ComName] = FieldComponent;
  // ProField[ComName] = (props: any) => {
  // 	return <FieldComponent {...props} {...getPlaceholder(key as ProFieldType, props.placeholder)} />;
  // };
}

export default withInstall(ProField);
