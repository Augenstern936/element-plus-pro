/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 21:03:50
 * @FilePath: \element-plus-pro\packages\form\src\components\TreeSelect\index.tsx
 */
import type { ProFieldTreeSelectProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormTreeSelectProps extends FormFieldCommonProps, ProFieldTreeSelectProps {}

const FormTreeSelect = defineComponent<ProFormTreeSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"treeSelect"} v-model={model.value} />;
  },
  {
    name: "ProFormTreeSelect"
  }
) as DefineComponent<ProFormTreeSelectProps>;

export const ProFormTreeSelect = withInstall(FormTreeSelect);
