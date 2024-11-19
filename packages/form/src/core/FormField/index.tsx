/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-11-01 23:16:44
 *
 */
import { ProField, ProFieldProps } from "@element-plus-ui/pro-field";
import { useVModel } from "@vueuse/core";
import { SetupContext, FunctionalComponent } from "vue-demi";
import createField from "../HOC/createField";

function BaseProFormField(props: ProFieldProps, ctx: SetupContext) {
  const model = useVModel(props, "modelValue", ctx.emit);
  return <ProField {...props} v-model={model.value} />;
}

export const ProFormField = createField(BaseProFormField as FunctionalComponent<any>);

export default ProFormField;
