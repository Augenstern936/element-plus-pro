/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:23:12
 */
import { colorPickerProps, ColorPickerProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldColor = {
  ...commomFieldProps,
  modelValue: colorPickerProps.modelValue,
  fieldProps: {
    type: Object as PropType<Partial<Omit<ColorPickerProps, "modelValue">>>
  }
};

export type ProFieldColorProps = Partial<ExtractPropTypes<typeof proFieldColor>>;
