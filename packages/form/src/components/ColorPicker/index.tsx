/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-09 17:03:52
 */
import { withInstall } from "@element-plus-pro/utils";
import type { ColorPickerProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormColorProps = FormFieldProps<ColorPickerProps> & {
  modelValue?: string;
};

const FormColor = defineComponent<ProFormColorProps>(
  props => {
    return () => <ProFormField type={"color"} fieldProps={props} />;
  },
  {
    name: "ProFormColor"
  }
) as DefineComponent<ProFormColorProps>;

export const ProFormColor = withInstall(FormColor);
