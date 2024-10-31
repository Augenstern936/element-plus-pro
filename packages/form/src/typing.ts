/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:45:04
 * @LastEditTime: 2024-10-22 21:14:42
 * @FilePath: \element-plus-pro\packages\form\src\typing.ts
 */
import { FormItemProps } from "element-plus";
import components from "./components";

export type ProFormFieldType = keyof typeof components;

export type ProFormLayout = "horizontal" | "vertical" | "inline";

export interface FormFieldCommonProps extends Partial<FormItemProps> {
  order?: number;
  readonly?: boolean;
}

export type FormFieldValueOption = {
  valueOptions?: [];
  valueEnum?: {};
  params?: {};
  request?: (params: any) => Promise<any>;
};
