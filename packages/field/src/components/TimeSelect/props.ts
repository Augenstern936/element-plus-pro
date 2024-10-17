/*
 * @Description:
 * @Date: 2024-04-10 17:50:45
 * @LastEditTime: 2024-10-16 22:26:54
 */
import { timeSelectProps, TimeSelectProps } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldTimeSelectProps = {
  ...commomFieldProps,
  modelValue: timeSelectProps.modelValue,
  placeholder: {
    type: String,
    default: void 0
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<TimeSelectProps, "modelValue">>>
  }
};

export type ProFieldTimeSelectProps = Partial<ExtractPropTypes<typeof proFieldTimeSelectProps>>;
