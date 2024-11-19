/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 21:03:29
 *
 */
import type { ProFieldTimeSelectProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormTimeSelectProps extends FormFieldCommonProps, ProFieldTimeSelectProps {}

const FormTimeSelect = defineComponent<ProFormTimeSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"timeSelect"} v-model={model.value} />;
  },
  {
    name: "ProFormTimeSelect"
  }
) as DefineComponent<ProFormTimeSelectProps>;

export const ProFormTimeSelect = withInstall(FormTimeSelect);
