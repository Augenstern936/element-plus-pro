/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:25:31
 */
import { rateProps, RateProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldRateProps = {
  ...commomFieldProps,
  modelValue: rateProps.modelValue,
  fieldProps: {
    type: Object as PropType<Partial<Omit<RateProps, "modelValue">>>
  }
};

export type ProFieldRateProps = Partial<ExtractPropTypes<typeof proFieldRateProps>>;
