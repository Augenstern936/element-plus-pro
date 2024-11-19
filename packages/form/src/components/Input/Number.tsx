/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 16:17:04
 *
 */
import type { ProFieldNumberProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormNumberProps extends FormFieldCommonProps, ProFieldNumberProps {}

const FormNumber = defineComponent<ProFormNumberProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"number"} v-model={model.value} />;
  },
  {
    name: "ProFormNumber"
  }
) as DefineComponent<ProFormNumberProps>;

export const ProFormNumber = withInstall(FormNumber);
