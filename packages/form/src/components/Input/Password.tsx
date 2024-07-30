/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:04:02
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Password.tsx
 */
import { withInstall } from "@element-plus-pro/utils";
import type { InputProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormPasswordProps = FormFieldProps<Omit<InputProps, "type">> & {
  modelValue?: string | number;
  placeholder?: string;
};

const FormPassword = defineComponent<ProFormPasswordProps>(
  props => {
    return () => <ProFormField {...props} type={"password"} />;
  },
  {
    name: "ProFormPassword"
  }
) as DefineComponent<ProFormPasswordProps>;

export const ProFormPassword = withInstall(FormPassword);
