/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-05-29 21:05:37
 * @LastEditTime: 2024-10-16 22:25:53
 * @FilePath: \element-plus-pro\packages\field\src\components\Select\props.ts
 */
import { Marker, ValueEnum, ValueOption, Request } from "@element-plus-ui/pro-types";
import { ISelectProps } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldSelectProps = {
  ...commomFieldProps,
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<string | number | boolean | Array<string | number | boolean>>
  },
  placeholder: {
    type: String,
    default: void 0
  },
  marker: {
    type: String as PropType<Marker>
  },
  separator: {
    type: String
  },
  request: {
    type: Function as PropType<Request<ProFieldSelectValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldSelectValueEnum>
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<ISelectProps, "modelValue">>>
  }
};

export type ProFieldSelectValueOption = ValueOption<{
  disabled?: boolean;
}>;

export type ProFieldSelectValueEnum = ValueEnum<Omit<ProFieldSelectValueOption, "value">>;

export type ProFieldSelectProps = Partial<ExtractPropTypes<typeof proFieldSelectProps>>;
