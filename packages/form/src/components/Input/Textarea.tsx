/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:04:20
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Textarea.tsx
 */
import { withInstall } from "@element-plus-pro/utils";
import type { InputProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormTextareaProps = FormFieldProps<Omit<InputProps, "type">> & {
  modelValue?: string | number;
  placeholder?: string;
};

const FormTextarea = defineComponent<ProFormTextareaProps>(
  props => {
    return () => <ProFormField {...props} type={"textarea"} />;
  },
  {
    name: "ProFormTextarea"
  }
) as DefineComponent<ProFormTextareaProps>;

export const ProFormTextarea = withInstall(FormTextarea);
