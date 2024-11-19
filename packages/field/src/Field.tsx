/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-04 22:57:02
 * @LastEditTime: 2024-11-10 17:50:23
 */
import { ToUppercaseFirst } from "@element-plus-ui/pro-types";
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
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

    return () => <Field.value {...omitObjectProperty(props, ["type"])} v-model={model.value} />;
  },
  {
    name: "ProField"
  }
) as ProFieldSuperProps<ProFieldProps>;

ProField.props = proFieldProps;

for (const key in components) {
  const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFieldType>;
  ProField[ComName] = components[key as ProFieldType] as DefineComponent;
}

export default withInstall(ProField);
