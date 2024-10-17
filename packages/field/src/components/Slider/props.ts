/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:26:04
 */
import { sliderProps, SliderProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldSliderProps = {
  ...commomFieldProps,
  modelValue: sliderProps.modelValue,
  fieldProps: {
    type: Object as PropType<Partial<Omit<SliderProps, "modelValue">>>
  }
};

export type ProFieldSliderProps = Partial<ExtractPropTypes<typeof proFieldSliderProps>>;
