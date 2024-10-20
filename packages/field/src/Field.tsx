/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-10-17 22:18:22
 * @FilePath: \element-plus-pro\packages\field\src\Field.tsx
 */
import { ToUppercaseFirst } from "@element-plus-ui/pro-types";
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import type { DefineComponent } from "vue-demi";
import { computed, defineComponent } from "vue-demi";
import components from "./components";
import { proFieldProps } from "./props";
import type { ProFieldProps, ProFieldSuperProps, ProFieldType } from "./typing";

export const ProField = defineComponent<ProFieldProps>(
  (props, ctx) => {
    const Field = computed(() => {
      return (components[props.type || "text"] ?? components.text) as DefineComponent;
    });

    const model = useVModel(props, "modelValue", ctx.emit);

    return () => <Field.value {...props} v-model={model.value} />;
  },
  {
    name: "ProField"
  }
) as ProFieldSuperProps<ProFieldProps>;

ProField.props = proFieldProps;

for (const key in components) {
  const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFieldType>;
  ProField[ComName] = components[key as ProFieldType];
}

export default withInstall(ProField);
