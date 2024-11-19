/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 23:05:53
 * @LastEditTime: 2024-11-15 11:26:22
 */
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import type { DefineComponent, ExtractPropTypes, PropType } from "vue-demi";
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
  ProFormTreeSelectProps,
  ProFormVirtualizedSelectProps,
  ProFormDateMonthsProps,
  ProFormDateYearsProps,
  ProFormProgressProps
} from "../../components";
import { CreateFormProps } from "../../core";
import { ProFormLayout } from "../../typing";
import { ProStepFormProps, ProStepsFormProps } from "../StepsForm";
import { ProSearchBarProps } from "../SearchBar";
import { ProDialogFormProps } from "../DialogForm";
import { ProDrawerFormProps } from "../DrawerForm";

export * from "../../core/CreateForm/typing";

export const proFormProps = {
  ...omitObjectProperty(CreateFormProps, ["inline", "labelPosition"]),
  variant: {
    type: String as PropType<"Form" | "DialogForm" | "DrawerForm" | "StepsForm" | "SearchBar">,
    default: "Form"
  },
  layout: {
    type: String as PropType<ProFormLayout>,
    default: "horizontal"
  }
};

interface VariantForm extends Partial<ExtractPropTypes<typeof proFormProps>> {}

// interface VariantSearchBarProps extends ProSearchBarProps {
//   variant?: "SearchBar";
// }

// interface VariantDialogFormProps extends ProDialogFormProps {
//   variant?: "DialogForm";
// }

export type ProFormProps = VariantForm;

export type ProFormSuperProps = DefineComponent<ProFormProps> & {
  StepForm: DefineComponent<ProStepFormProps>;
  StepsForm: DefineComponent<ProStepsFormProps>;
  SearchBar: DefineComponent<ProSearchBarProps>;
  DialogForm: DefineComponent<ProDialogFormProps>;
  DrawerForm: DefineComponent<ProDrawerFormProps>;
  Text: DefineComponent<ProFormTextProps>;
  Number: DefineComponent<ProFormNumberProps>;
  Password: DefineComponent<ProFormPasswordProps>;
  Textarea: DefineComponent<ProFormTextareaProps>;
  Date: DefineComponent<ProFormDateProps>;
  Dates: DefineComponent<ProFormDatesProps>;
  DateTime: DefineComponent<ProFormDateTimeProps>;
  DateWeek: DefineComponent<ProFormDateWeekProps>;
  DateMonth: DefineComponent<ProFormDateMonthProps>;
  DateMonths: DefineComponent<ProFormDateMonthsProps>;
  DateYear: DefineComponent<ProFormDateYearProps>;
  DateYears: DefineComponent<ProFormDateYearsProps>;
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
  Progress: DefineComponent<ProFormProgressProps>;
  VirtualizedSelect: DefineComponent<ProFormVirtualizedSelectProps>;
};
