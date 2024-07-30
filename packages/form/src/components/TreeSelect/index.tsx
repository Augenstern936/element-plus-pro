/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-09 17:05:23
 * @FilePath: \element-plus-pro\packages\form\src\components\TreeSelect\index.tsx
 */
import type { ProFieldTreeSelectProps } from "@element-plus-pro/field";
import { withInstall } from "@element-plus-pro/utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormTreeSelectProps = FormFieldProps<ProFieldTreeSelectProps> & {
  modelValue?: string | number | boolean | (string | number | boolean)[];
  placeholder?: string;
};

const FormTreeSelect = defineComponent<ProFormTreeSelectProps>(
  props => {
    return () => <ProFormField {...props} type={"treeSelect"} />;
  },
  {
    name: "ProFormTreeSelect"
  }
) as DefineComponent<ProFormTreeSelectProps>;

export const ProFormTreeSelect = withInstall(FormTreeSelect);
