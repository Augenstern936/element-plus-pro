/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-07-11 20:54:01
 */
import { DefineComponent } from "vue-demi";
import components, {
  ProFieldAvatarProps,
  ProFieldCascaderProps,
  ProFieldCheckboxProps,
  ProFieldColorProps,
  ProFieldDateMonthProps,
  ProFieldDateMonthRangeProps,
  ProFieldDateProps,
  ProFieldDateRangeProps,
  ProFieldDatesProps,
  ProFieldDateTimeProps,
  ProFieldDateTimeRangeProps,
  ProFieldDateWeekProps,
  ProFieldDateYearProps,
  ProFieldImageProps,
  ProFieldNumberProps,
  ProFieldPasswordProps,
  ProFieldProgressProps,
  ProFieldRadioProps,
  ProFieldRateProps,
  ProFieldSelectProps,
  ProFieldSliderProps,
  ProFieldSwitchProps,
  ProFieldTextareaProps,
  ProFieldTextProps,
  ProFieldTimeProps,
  ProFieldTimeRangeProps,
  ProFieldTimeSelectProps,
  ProFieldTreeSelectProps
} from "./components";

type TextFieldProps = {
  type?: "text";
  fieldProps?: ProFieldTextProps;
};

type NumberFieldProps = {
  type?: "number";
  fieldProps?: ProFieldNumberProps;
};

type PasswordFieldProps = {
  type?: "password";
  fieldProps?: ProFieldPasswordProps;
};

type TextareaFieldProps = {
  type?: "textarea";
  fieldProps?: ProFieldTextareaProps;
};

type DateFieldProps = {
  type: "date";
  fieldProps?: ProFieldDateProps;
};

type DateRangeFieldProps = {
  type: "dateRange";
  fieldProps?: ProFieldDateRangeProps;
};

type DatesFieldProps = {
  type: "dates";
  fieldProps?: ProFieldDatesProps;
};

type DateYearFieldProps = {
  type: "dateYear";
  fieldProps?: ProFieldDateYearProps;
};

type DateMonthFieldProps = {
  type: "dateMonth";
  fieldProps?: ProFieldDateMonthProps;
};

type DateMonthRangeFieldProps = {
  type: "dateMonthRange";
  fieldProps?: ProFieldDateMonthRangeProps;
};

type DateTimeWeekFieldProps = {
  type: "dateWeek";
  fieldProps?: ProFieldDateWeekProps;
};

type DateTimeFieldProps = {
  type: "dateTime";
  fieldProps?: ProFieldDateTimeProps;
};

type DateTimeRangeFieldProps = {
  type: "dateTimeRange";
  fieldProps?: ProFieldDateTimeRangeProps;
};

type TimeFieldProps = {
  type: "time";
  fieldProps?: ProFieldTimeProps;
};

type TimeRangeFieldProps = {
  type: "timeRange";
  fieldProps?: ProFieldTimeRangeProps;
};

type TimeSelectFieldProps = {
  type: "timeSelect";
  fieldProps?: ProFieldTimeSelectProps;
};

type SelectFieldProps = {
  type: "select";
  fieldProps?: ProFieldSelectProps;
};

type AvatarFieldProps = {
  type?: "avatar";
  fieldProps?: ProFieldAvatarProps;
};

type SwitchFieldProps = {
  type?: "switch";
  fieldProps?: ProFieldSwitchProps;
};

type CascaderFieldProps = {
  type?: "cascader";
  fieldProps?: ProFieldCascaderProps;
};

type CheckboxFieldProps = {
  type?: "checkbox" | "checkboxButton";
  fieldProps?: ProFieldCheckboxProps;
};

type ColorFieldProps = {
  type?: "color";
  fieldProps?: ProFieldColorProps;
};

type ImageFieldProps = {
  type?: "image";
  fieldProps?: ProFieldImageProps;
};

type ProgressFieldProps = {
  type?: "progress";
  fieldProps?: ProFieldProgressProps;
};

type RateFieldProps = {
  type?: "rate";
  fieldProps?: ProFieldRateProps;
};

type RadioFieldProps = {
  type?: "radio" | "radioButton";
  fieldProps?: ProFieldRadioProps;
};

type SliderFieldProps = {
  type?: "slider";
  fieldProps?: ProFieldSliderProps;
};

type TreeSelectFieldProps = {
  type?: "treeSelect";
  fieldProps?: ProFieldTreeSelectProps;
};

export type ProFieldMode = "read" | "edit";

export type ProFieldType = keyof typeof components;

export type FieldProps =
  | TextFieldProps
  | NumberFieldProps
  | PasswordFieldProps
  | TextareaFieldProps
  | DateFieldProps
  | DateRangeFieldProps
  | DatesFieldProps
  | DateYearFieldProps
  | DateMonthFieldProps
  | DateMonthRangeFieldProps
  | DateTimeWeekFieldProps
  | DateTimeFieldProps
  | DateTimeRangeFieldProps
  | TimeFieldProps
  | TimeRangeFieldProps
  | TimeSelectFieldProps
  | SelectFieldProps
  | AvatarFieldProps
  | SwitchFieldProps
  | CascaderFieldProps
  | CheckboxFieldProps
  | ColorFieldProps
  | ImageFieldProps
  | ProgressFieldProps
  | RadioFieldProps
  | RateFieldProps
  | SliderFieldProps
  | TreeSelectFieldProps;

export type ProFieldSuperProps<T> = DefineComponent<T> & {
  Text: DefineComponent<ProFieldTextProps>;
  Number: DefineComponent<ProFieldNumberProps>;
  Password: DefineComponent<ProFieldPasswordProps>;
  Textarea: DefineComponent<ProFieldTextareaProps>;
  Date: DefineComponent<ProFieldDateProps>;
  Dates: DefineComponent<ProFieldDatesProps>;
  DateTime: DefineComponent<ProFieldDateTimeProps>;
  DateWeek: DefineComponent<ProFieldDateWeekProps>;
  DateMonth: DefineComponent<ProFieldDateMonthProps>;
  DateYear: DefineComponent<ProFieldDateYearProps>;
  DateRange: DefineComponent<ProFieldDateRangeProps>;
  DateTimeRange: DefineComponent<ProFieldDateTimeRangeProps>;
  DateMonthRange: DefineComponent<ProFieldDateMonthRangeProps>;
  Time: DefineComponent<ProFieldTimeProps>;
  TimeRange: DefineComponent<ProFieldTimeRangeProps>;
  TimeSelect: DefineComponent<ProFieldTimeSelectProps>;
  Select: DefineComponent<ProFieldSelectProps>;
  TreeSelect: DefineComponent<ProFieldTreeSelectProps>;
  Checkbox: DefineComponent<ProFieldCheckboxProps>;
  CheckboxButton: DefineComponent<ProFieldCheckboxProps>;
  Radio: DefineComponent<ProFieldRadioProps>;
  RadioButton: DefineComponent<ProFieldRadioProps>;
  Switch: DefineComponent<ProFieldSwitchProps>;
  Avatar: DefineComponent<ProFieldAvatarProps>;
  Image: DefineComponent<ProFieldImageProps>;
  Rate: DefineComponent<ProFieldRateProps>;
  Color: DefineComponent<ProFieldColorProps>;
  Cascader: DefineComponent<ProFieldCascaderProps>;
  Slider: DefineComponent<ProFieldSliderProps>;
  Progress: DefineComponent<ProFieldProgressProps>;
};
