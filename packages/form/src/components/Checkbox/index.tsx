/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-02 22:22:28
 * @LastEditTime: 2024-10-22 20:53:51
 *
 */
import type { ProFieldCheckboxButtonProps, ProFieldCheckboxProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormCheckboxProps extends FormFieldCommonProps, ProFieldCheckboxProps {}
export interface ProFormCheckboxButtonProps extends FormFieldCommonProps, ProFieldCheckboxButtonProps {}

const FormCheckbox = defineComponent<ProFormCheckboxProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"checkbox"} v-model={model.value} />;
  },
  {
    name: "ProFormCheckbox"
  }
) as DefineComponent<ProFormCheckboxProps>;

const FormCheckboxButton = defineComponent<ProFormCheckboxButtonProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"checkboxButton"} v-model={model.value} />;
  },
  {
    name: "ProFormCheckboxButton"
  }
) as DefineComponent<ProFormCheckboxButtonProps>;

export const ProFormCheckbox = withInstall(FormCheckbox);

export const ProFormCheckboxButton = withInstall(FormCheckboxButton);
