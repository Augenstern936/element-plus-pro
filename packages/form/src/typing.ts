/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-30 21:45:04
 * @LastEditTime: 2024-11-15 14:29:03
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
