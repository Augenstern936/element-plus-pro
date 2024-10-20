/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:07:29
 * @LastEditTime: 2024-10-16 22:24:37
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\props.ts
 */
import { inputNumberProps, inputProps } from "element-plus";
import type { InputNumberProps, InputProps } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const baseInputProps = {
  ...commomFieldProps,
  modelValue: inputProps.modelValue,
  placeholder: inputProps.placeholder,
  type: {
    type: String as PropType<"text" | "password" | "textarea">,
    default: "text"
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<InputProps, "modelValue">>>
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
