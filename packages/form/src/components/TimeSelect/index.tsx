/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:05:26
 * @FilePath: \element-plus-pro\packages\form\src\components\TimeSelect\index.tsx
 */
import type { ProFieldTimeSelectProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormTimeSelectProps = FormFieldProps<ProFieldTimeSelectProps> & {
  modelValue?: string;
  placeholder?: string;
};

const FormTimeSelect = defineComponent<ProFormTimeSelectProps>(
  props => {
    return () => <ProFormField {...props} type={"timeSelect"} />;
  },
  {
    name: "ProFormTimeSelect"
  }
) as DefineComponent<ProFormTimeSelectProps>;

export const ProFormTimeSelect = withInstall(FormTimeSelect);
