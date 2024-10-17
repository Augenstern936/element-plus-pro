/*
 * @Description:
 * @Date: 2024-04-15 10:47:56
 * @LastEditTime: 2024-10-16 22:22:30
 */
import { Request, ValueOption } from "@element-plus-ui/pro-types";
import { cascaderProps, CascaderProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldCascaderProps = {
  ...commomFieldProps,
  modelValue: cascaderProps.modelValue,
  placeholder: cascaderProps.placeholder,
  separator: {
    type: String,
    default: "/"
  },
  request: {
    type: Function as PropType<Request<ProFieldCascaderValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldCascaderValueEnum>
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<CascaderProps & { placeholder?: string }, "modelValue">>>
  }
};

type Option = Omit<ValueOption<{ children?: ProFieldCascaderValueEnum }>, "color" | "status">;

export type ProFieldCascaderValueEnum =
  | Array<string | number | boolean | Option>
  | Record<string, string | Omit<Option, "value">>;

export type ProFieldCascaderProps = Partial<ExtractPropTypes<typeof proFieldCascaderProps>>;
