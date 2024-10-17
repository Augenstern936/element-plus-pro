/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-10-16 22:25:10
 */
import type { Marker, ValueEnum, Request } from "@element-plus-ui/pro-types";
import type { RadioButtonProps, RadioProps } from "element-plus";
import { radioGroupProps, RadioGroupProps } from "element-plus";
import { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

const commomProps = {
  ...commomFieldProps,
  modelValue: radioGroupProps.modelValue,
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
    type: Object as PropType<Partial<Omit<RadioGroupProps, "modelValue">>>
  }
};

export const proFieldRadioProps = {
  ...commomProps,
  request: {
    type: Function as PropType<Request<ProFieldRadioValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldRadioValueEnum>
  }
};

export const proFieldRadioButtonProps = {
  ...commomProps,
  request: {
    type: Function as PropType<Request<ProFieldRadioButtonValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ProFieldRadioButtonValueEnum>
  }
};

type BaseRadioProps = Partial<Omit<RadioProps, "label" | "value" | "modelValue">>;

type BaseRadioButtonProps = Partial<Omit<RadioButtonProps, "label" | "value">>;

export type ProFieldRadioValueEnum = ValueEnum<BaseRadioProps>;

export type ProFieldRadioButtonValueEnum = ValueEnum<BaseRadioButtonProps>;

export type ProFieldRadioProps = Partial<ExtractPropTypes<typeof proFieldRadioProps>>;

export type ProFieldRadioButtonProps = Partial<ExtractPropTypes<typeof proFieldRadioButtonProps>>;
