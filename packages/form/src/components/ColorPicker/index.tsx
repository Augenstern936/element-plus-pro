/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 20:54:33
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldColorProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormColorProps extends FormFieldCommonProps, ProFieldColorProps {}

const FormColor = defineComponent<ProFormColorProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"color"} v-model={model.value} />;
  },
  {
    name: "ProFormColor"
  }
) as DefineComponent<ProFormColorProps>;

export const ProFormColor = withInstall(FormColor);
