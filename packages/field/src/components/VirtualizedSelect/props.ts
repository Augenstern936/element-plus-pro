/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-05-29 21:05:37
 * @LastEditTime: 2024-10-16 22:27:47
 * @FilePath: \element-plus-pro\packages\field\src\components\VirtualizedSelect\props.ts
 */
import { Marker, ValueEnum, ValueOption, Request } from "@element-plus-ui/pro-types";
import { ISelectV2Props } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proFieldVirtualizedSelectProps = {
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
    type: Function as PropType<Request<ProFieldVirtualizedSelectValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldVirtualizedSelectValueEnum>
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<ISelectV2Props, "modelValue">>>
  }
};

export type ProFieldVirtualizedSelectOption = ValueOption & {
  disabled?: boolean;
};

export type ProFieldVirtualizedSelectValueEnum = ValueEnum<Omit<ProFieldVirtualizedSelectOption, "value">>;

export type ProFieldVirtualizedSelectProps = Partial<ExtractPropTypes<typeof proFieldVirtualizedSelectProps>>;
