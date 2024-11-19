/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-10 00:07:29
 * @LastEditTime: 2024-11-15 14:43:46
 */
import { inputNumberProps, inputProps } from "element-plus";
import type { InputEmits, InputNumberProps, InputProps } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";
import { EventsFormat } from "@element-plus-ui/pro-types";

export const baseInputProps = {
  ...commomFieldProps,
  modelValue: inputProps.modelValue,
  placeholder: inputProps.placeholder,
  type: {
    type: String as PropType<"text" | "password" | "textarea">,
    default: "text"
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<InputProps & EventsFormat<InputEmits>, "modelValue" | "onUpdate:modelValue">>>
  }
};

export const proInputNumberProps = {
  ...commomFieldProps,
  modelValue: inputNumberProps.modelValue,
  placeholder: inputNumberProps.placeholder,
  fieldProps: {
    type: Object as PropType<Omit<InputNumberProps, "modelValue">>
  }
};

export type BaseInputProps = Partial<ExtractPropTypes<typeof baseInputProps>>;

export type ProFieldInputNumberProps = Partial<ExtractPropTypes<typeof proInputNumberProps>>;

export type ProFieldTextProps = Omit<BaseInputProps, "type">;

export type ProFieldNumberProps = Omit<BaseInputProps, "type">;

export type ProFieldPasswordProps = Omit<BaseInputProps, "type">;

export type ProFieldTextareaProps = Omit<BaseInputProps, "type">;
