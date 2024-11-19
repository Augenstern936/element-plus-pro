/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 16:19:13
 *
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldPasswordProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormPasswordProps extends FormFieldCommonProps, ProFieldPasswordProps {}

const FormPassword = defineComponent<ProFormPasswordProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"password"} v-model={model.value} />;
  },
  {
    name: "ProFormPassword"
  }
) as DefineComponent<ProFormPasswordProps>;

export const ProFormPassword = withInstall(FormPassword);
