/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 17:52:33
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import type { ProFieldCascaderProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";

export interface ProFormCascaderProps extends FormFieldCommonProps, ProFieldCascaderProps {}

const FormCascader = defineComponent<ProFormCascaderProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => <ProFormField {...props} type={"cascader"} v-model={model.value} />;
  },
  {
    name: "ProFormCascader"
  }
) as DefineComponent<ProFormCascaderProps>;

export const ProFormCascader = withInstall(FormCascader);
