/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 21:16:50
 * @LastEditTime: 2024-07-06 16:37:06
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\typing.ts
 */
import type { ProFieldType } from "@element-plus-pro/field";
import { ValueEnum, ValueOption } from "@element-plus-pro/types";
import { FormItemProps } from "element-plus";
import type { JSX } from "vue/jsx-runtime";

export type ProFormColumns = Omit<FormItemProps, "prop" | "label"> & {
  key?: string;
  label?: string | (() => JSX.Element);
  dataField?: string;
  readonly?: boolean;
  valueType?: ProFieldType;
  valueEnum?: ValueEnum;
  valueOptions?: ValueOption[];
  defaultValue?: string | number | boolean | any[];
  fieldProps?: Record<string, any>;
  hide?: boolean | FormItemPropertyFunction<boolean>;
  render?: () => JSX.Element;
};

/**
 * 通用函数类型
 */
type FormItemPropertyFunction<T> = (entity: Record<string, any>, items: ProFormColumns[]) => T;
