/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-10-20 11:54:15
 * @FilePath: \element-plus-pro\packages\form\src\core\FormField\index.tsx
 */
import { ProField, ProFieldProps } from "@element-plus-ui/pro-field";
import { useVModel } from "@vueuse/core";
import { SetupContext, FunctionalComponent } from "vue-demi";
import createField from "../HOC/createField";

function BaseProFormField(props: ProFieldProps, ctx: SetupContext) {
  const model = useVModel(props, "modelValue", ctx.emit);

  return <ProField {...props} v-model={model.value} />;
}

export const ProFormField = createField(BaseProFormField as FunctionalComponent);

export default ProFormField;
