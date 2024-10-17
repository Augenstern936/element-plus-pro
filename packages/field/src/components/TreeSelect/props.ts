/*
 * @Description:
 * @Date: 2024-04-10 17:42:22
 * @LastEditTime: 2024-10-16 22:27:26
 */
import type { ISelectProps } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";
import { Request, ValueOption } from "@element-plus-ui/pro-types";

export const proFieldTreeSelectProps = {
  ...commomFieldProps,
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<string | number | boolean | Array<string | number | boolean>>
  },
  placeholder: {
    type: String,
    default: void 0
  },
  separator: {
    type: String
  },
  request: {
    type: Function as PropType<Request<ProFieldTreeSelectValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldTreeSelectValueEnum>
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<ISelectProps & Record<string, any>, "modelValue">>>
  }
};

type Option = Omit<ValueOption<{ children?: ProFieldTreeSelectValueEnum }>, "color" | "status">;

export type ProFieldTreeSelectValueEnum =
  | Array<string | number | boolean | Option>
  | Record<string, string | Omit<Option, "value">>;

export type ProFieldTreeSelectProps = Partial<ExtractPropTypes<typeof proFieldTreeSelectProps>>;
