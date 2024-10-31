/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 16:24:41
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldRateProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormRateProps extends FormFieldCommonProps, ProFieldRateProps {}

const FormRate = defineComponent<ProFormRateProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"rate"} v-model={model.value} />;
  },
  {
    name: "ProFormRate"
  }
) as DefineComponent<ProFormRateProps>;

export const ProFormRate = withInstall(FormRate);
