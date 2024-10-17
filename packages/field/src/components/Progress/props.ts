/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:24:54
 */
import { ProgressProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldProgressProps = {
  ...commomFieldProps,
  modelValue: {
    type: Number,
    default: 0
  },
  fieldProps: {
    type: Object as PropType<Partial<ProgressProps>>
  }
};

export type ProFieldProgressProps = Partial<ExtractPropTypes<typeof proFieldProgressProps>>;
