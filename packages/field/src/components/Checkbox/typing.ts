/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-10-16 22:22:56
 */
import type { Marker, ValueEnum, Request } from "@element-plus-ui/pro-types";
import type { CheckboxProps } from "element-plus";
import { checkboxGroupProps, CheckboxGroupProps } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

const commonProps = {
  ...commomFieldProps,
  modelValue: checkboxGroupProps.modelValue,
  marker: {
    type: String as PropType<Marker>
  },
  separator: {
    type: String
  },
  mappingEnumValue: {
    type: String as PropType<"label" | "index">,
    default: "label"
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<CheckboxGroupProps, "modelValue">>>
  }
};

export const proFieldCheckboxProps = {
  ...commonProps,
  request: {
    type: Function as PropType<Request<ProFieldCheckboxValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldCheckboxValueEnum>
  }
};

export const proFieldCheckboxButtonProps = {
  ...commonProps,
  request: {
    type: Function as PropType<Request<ProFieldCheckboxButtonValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldCheckboxButtonValueEnum>
  }
};

type BaseCheckboxProps = Partial<Omit<CheckboxProps, "label" | "value" | "modelValue">>;

type BaseCheckboxButtonProps = Partial<
  Omit<
    CheckboxProps,
    | "label"
    | "value"
    | "modelValue"
    | "border"
    | "size"
    | "indeterminate"
    | "validate-event"
    | "tabindex"
    | "id"
    | "controls"
    | "aria-controls"
  >
>;

export type ProFieldCheckboxValueEnum = ValueEnum<BaseCheckboxProps>;

export type ProFieldCheckboxButtonValueEnum = ValueEnum<BaseCheckboxButtonProps>;

export type ProFieldCheckboxProps = Partial<ExtractPropTypes<typeof proFieldCheckboxProps>>;

export type ProFieldCheckboxButtonProps = Partial<ExtractPropTypes<typeof proFieldCheckboxButtonProps>>;
