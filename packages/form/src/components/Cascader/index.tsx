/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-09 17:03:33
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import type { CascaderProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormCascaderProps = FormFieldProps<CascaderProps> & {
  modelValue?: string | number | (string | number)[];
  placeholder?: string;
};

const FormCascader = defineComponent<ProFormCascaderProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => <ProFormField type={"cascader"} fieldProps={props} v-model={model.value} />;
  },
  {
    name: "ProFormCascader"
  }
) as DefineComponent<ProFormCascaderProps>;

export const ProFormCascader = withInstall(FormCascader);
