/*
 * @Description:
 * @Date: 2024-04-10 17:57:47
 * @LastEditTime: 2024-10-16 23:51:17
 */
import { TimePickerDefaultProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

const baseTimePickerProps = {
  ...commomFieldProps,
  fieldProps: {
    type: Object as PropType<Partial<Omit<TimePickerDefaultProps, "modelValue" | "isRange">>>
  }
};

export const proFieldTimeProps = {
  ...baseTimePickerProps,
  modelValue: {
    type: [String, Number]
  },
  placeholder: {
    type: String,
    default: void 0
  }
};

export const proFieldTimeRangeProps = {
  ...baseTimePickerProps,
  modelValue: {
    type: Array as PropType<(string | number)[]>
  },
  separator: {
    type: String
  },
  placeholder: {
    type: [String, Array as unknown as PropType<[string] | [string, string]>],
    default: void 0
  }
};

export type ProFieldTimeProps = Omit<Partial<ExtractPropTypes<typeof proFieldTimeProps>>, "isRange">;

export type ProFieldTimeRangeProps = Omit<Partial<ExtractPropTypes<typeof proFieldTimeRangeProps>>, "isRange">;
