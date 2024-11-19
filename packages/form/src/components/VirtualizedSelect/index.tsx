/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 21:04:17
 *
 */
import type { ProFieldVirtualizedSelectProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormVirtualizedSelectProps extends FormFieldCommonProps, ProFieldVirtualizedSelectProps {}

const FormVirtualizedSelect = defineComponent<ProFormVirtualizedSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"treeSelect"} v-model={model.value} />;
  },
  {
    name: "ProFormVirtualizedSelect"
  }
) as DefineComponent<ProFormVirtualizedSelectProps>;

export const ProFormVirtualizedSelect = withInstall(FormVirtualizedSelect);
