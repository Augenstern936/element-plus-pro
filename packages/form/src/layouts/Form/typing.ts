/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 23:05:53
 * @LastEditTime: 2024-10-20 14:03:36
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\typing.ts
 */
import { excludeObjectProperty } from "@element-plus-ui/pro-utils";
import { GeneratePropTypes } from "@element-plus-ui/pro-types";
import type { DefineComponent, PropType } from "vue-demi";
import {
  ProFormUploadAavtarProps,
  ProFormCascaderProps,
  ProFormCheckboxButtonProps,
  ProFormCheckboxProps,
  ProFormColorProps,
  ProFormDateMonthProps,
  ProFormDateMonthRangeProps,
  ProFormDateProps,
  ProFormDateRangeProps,
  ProFormDatesProps,
  ProFormDateTimeProps,
  ProFormDateTimeRangeProps,
  ProFormDateWeekProps,
  ProFormDateYearProps,
  ProFormUploadImageProps,
  ProFormNumberProps,
  ProFormPasswordProps,
  ProFormRadioButtonProps,
  ProFormRadioProps,
  ProFormRateProps,
  ProFormSelectProps,
  ProFormSliderProps,
  ProFormSwitchProps,
  ProFormTextareaProps,
  ProFormTextProps,
  ProFormTimeProps,
  ProFormTimeRangeProps,
  ProFormTimeSelectProps,
  ProFormTreeSelectProps
} from "../../components";
import { generateFormProps, GenerateFormProps } from "../../core";
import { ProFormLayout } from "../../typing";

export * from "../../core/GenerateForm/typing";

export const proFormProps = {
  ...excludeObjectProperty(generateFormProps, ["inline", "labelPosition"]),
  layout: {
    type: String as PropType<ProFormLayout>,
    default: "horizontal"
  }
};

export type ProFormProps = GeneratePropTypes<typeof proFormProps> & Omit<GenerateFormProps, "inline" | "labelPosition">;

export type ProFormSuperProps = DefineComponent<ProFormProps> & {
  Text: DefineComponent<ProFormTextProps>;
  Number: DefineComponent<ProFormNumberProps>;
  Password: DefineComponent<ProFormPasswordProps>;
  Textarea: DefineComponent<ProFormTextareaProps>;
  Date: DefineComponent<ProFormDateProps>;
  Dates: DefineComponent<ProFormDatesProps>;
  DateTime: DefineComponent<ProFormDateTimeProps>;
  DateWeek: DefineComponent<ProFormDateWeekProps>;
  DateMonth: DefineComponent<ProFormDateMonthProps>;
  DateYear: DefineComponent<ProFormDateYearProps>;
  DateRange: DefineComponent<ProFormDateRangeProps>;
  DateTimeRange: DefineComponent<ProFormDateTimeRangeProps>;
  DateMonthRange: DefineComponent<ProFormDateMonthRangeProps>;
  Time: DefineComponent<ProFormTimeProps>;
  TimeRange: DefineComponent<ProFormTimeRangeProps>;
  TimeSelect: DefineComponent<ProFormTimeSelectProps>;
  Select: DefineComponent<ProFormSelectProps>;
  TreeSelect: DefineComponent<ProFormTreeSelectProps>;
  Checkbox: DefineComponent<ProFormCheckboxProps>;
  CheckboxButton: DefineComponent<ProFormCheckboxButtonProps>;
  Radio: DefineComponent<ProFormRadioProps>;
  RadioButton: DefineComponent<ProFormRadioButtonProps>;
  Switch: DefineComponent<ProFormSwitchProps>;
  UploadAavtar: DefineComponent<ProFormUploadAavtarProps>;
  UploadImage: DefineComponent<ProFormUploadImageProps>;
  Rate: DefineComponent<ProFormRateProps>;
  Color: DefineComponent<ProFormColorProps>;
  Cascader: DefineComponent<ProFormCascaderProps>;
  Slider: DefineComponent<ProFormSliderProps>;
};
