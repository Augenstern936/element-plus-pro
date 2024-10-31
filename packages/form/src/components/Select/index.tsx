/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 21:01:30
 */
import type { ProFieldSelectProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormSelectProps extends FormFieldCommonProps, ProFieldSelectProps {}

const FormSelect = defineComponent<ProFormSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"select"} v-model={model.value} />;
  },
  {
    name: "ProFormSelect"
  }
) as DefineComponent<ProFormSelectProps>;

export const ProFormSelect = withInstall(FormSelect);
