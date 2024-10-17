/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:26:19
 */
import { switchProps, SwitchProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldSwitchProps = {
  ...commomFieldProps,
  modelValue: switchProps.modelValue,
  fieldProps: {
    type: Object as PropType<Partial<Omit<SwitchProps, "modelValue">>>
  }
};

export type ProFieldSwitchProps = Partial<ExtractPropTypes<typeof proFieldSwitchProps>>;
