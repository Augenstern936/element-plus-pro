/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-11-11 21:55:37
 *
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldTextProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormTextProps extends FormFieldCommonProps, ProFieldTextProps {}

const FormText = defineComponent<ProFormTextProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"text"} v-model={model.value} />;
  },
  {
    name: "ProFormText"
  }
) as DefineComponent<ProFormTextProps>;

export const ProFormText = withInstall(FormText);
