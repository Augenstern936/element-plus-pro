/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 16:22:26
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldRadioButtonProps, ProFieldRadioProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormRadioProps extends FormFieldCommonProps, ProFieldRadioProps {}
export interface ProFormRadioButtonProps extends FormFieldCommonProps, ProFieldRadioButtonProps {}

const FormRadio = defineComponent<ProFormRadioProps>(
  (props, ctx) => {
    return () => <ProFormField {...props} type={"radio"} />;
  },
  {
    name: "ProFormRadio"
  }
) as DefineComponent<ProFormRadioProps>;

const FormRadioButton = defineComponent<ProFormRadioButtonProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"radioButton"} v-model={model.value} />;
  },
  {
    name: "ProFormRadioButton"
  }
) as DefineComponent<ProFormRadioButtonProps>;

export const ProFormRadio = withInstall(FormRadio);

export const ProFormRadioButton = withInstall(FormRadioButton);
