/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-10-22 21:02:15
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldSliderProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormSliderProps extends FormFieldCommonProps, ProFieldSliderProps {}

const FormSlider = defineComponent<ProFormSliderProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"slider"} v-model={model.value} />;
  },
  {
    name: "ProFormSlider"
  }
) as DefineComponent<ProFormSliderProps>;

export const ProFormSlider = withInstall(FormSlider);
