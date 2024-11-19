/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-25 11:00:51
 *
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import type { ProFieldSwitchProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";

export interface ProFormSwitchProps extends FormFieldCommonProps, ProFieldSwitchProps {}

const FormSwitch = defineComponent<ProFormSwitchProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"switch"} v-model={model.value} />;
  },
  {
    name: "ProFormSwitch"
  }
) as DefineComponent<ProFormSwitchProps>;

export const ProFormSwitch = withInstall(FormSwitch);
