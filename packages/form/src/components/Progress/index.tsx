/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 21:07:57
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import type { ProFieldProgressProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";

export interface ProFormProgressProps extends FormFieldCommonProps, ProFieldProgressProps {}

const FormProgress = defineComponent<ProFormProgressProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => <ProFormField {...props} type={"progress"} v-model={model.value} />;
  },
  {
    name: "ProFormProgress"
  }
) as DefineComponent<ProFormProgressProps>;

export const ProFormProgress = withInstall(FormProgress);
