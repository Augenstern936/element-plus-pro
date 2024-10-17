/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-10-16 18:00:57
 */
import { DefineComponent } from "vue-demi";
import { GeneratePropTypes } from "@element-plus-ui/pro-types";
import components, {
  ProFieldUploadAvatarProps,
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
  ProFieldUploadImageProps,
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
  ProFieldTreeSelectProps,
  ProFieldVirtualizedSelectProps
} from "./components";
import { proFieldProps } from "./props";

interface TextFieldProps extends Pick<ProFieldTextProps, "fieldProps"> {
  type?: "text";
}

interface NumberFieldProps extends Pick<ProFieldNumberProps, "fieldProps"> {
  type?: "number";
}

interface PasswordFieldProps extends Pick<ProFieldPasswordProps, "fieldProps"> {
  type?: "password";
}

interface TextareaFieldProps extends Pick<ProFieldTextareaProps, "fieldProps"> {
  type?: "textarea";
}

interface DateFieldProps extends Pick<ProFieldDateProps, "fieldProps"> {
  type: "date";
}

interface DateRangeFieldProps extends Pick<ProFieldDateRangeProps, "fieldProps"> {
  type: "dateRange";
}

interface DatesFieldProps extends Pick<ProFieldDatesProps, "fieldProps"> {
  type: "dates";
}

interface DateYearFieldProps extends Pick<ProFieldDateYearProps, "fieldProps"> {
  type: "dateYear";
}

interface DateMonthFieldProps extends Pick<ProFieldDateMonthProps, "fieldProps"> {
  type: "dateMonth";
}

interface DateMonthRangeFieldProps extends Pick<ProFieldDateMonthRangeProps, "fieldProps"> {
  type: "dateMonthRange";
}

interface DateTimeWeekFieldProps extends Pick<ProFieldDateWeekProps, "fieldProps"> {
  type: "dateWeek";
}

interface DateTimeFieldProps extends Pick<ProFieldDateTimeProps, "fieldProps"> {
  type: "dateTime";
}

interface DateTimeRangeFieldProps extends Pick<ProFieldDateTimeRangeProps, "fieldProps"> {
  type: "dateTimeRange";
}

interface TimeFieldProps extends Pick<ProFieldTimeProps, "fieldProps"> {
  type: "time";
}

interface TimeRangeFieldProps extends Pick<ProFieldTimeRangeProps, "fieldProps"> {
  type: "timeRange";
}

interface TimeSelectFieldProps extends Pick<ProFieldTimeSelectProps, "fieldProps"> {
  type: "timeSelect";
}

interface SelectFieldProps extends Pick<ProFieldSelectProps, "fieldProps"> {
  type: "select";
}

interface AvatarFieldProps extends Pick<ProFieldUploadAvatarProps, "fieldProps"> {
  type?: "uploadAvatar";
}

interface SwitchFieldProps extends Pick<ProFieldSwitchProps, "fieldProps"> {
  type?: "switch";
}

interface CascaderFieldProps extends Pick<ProFieldCascaderProps, "fieldProps"> {
  type?: "cascader";
}

interface CheckboxFieldProps extends Pick<ProFieldCheckboxProps, "fieldProps"> {
  type?: "checkbox" | "checkboxButton";
}

interface ColorFieldProps extends Pick<ProFieldColorProps, "fieldProps"> {
  type?: "color";
}

interface ImageFieldProps extends Pick<ProFieldUploadImageProps, "fieldProps"> {
  type?: "uploadImage";
}

interface ProgressFieldProps extends Pick<ProFieldProgressProps, "fieldProps"> {
  type?: "progress";
}

interface RateFieldProps extends Pick<ProFieldRateProps, "fieldProps"> {
  type?: "rate";
}

interface RadioFieldProps extends Pick<ProFieldRadioProps, "fieldProps"> {
  type?: "radio" | "radioButton";
}

interface SliderFieldProps extends Pick<ProFieldSliderProps, "fieldProps"> {
  type?: "slider";
}

interface TreeSelectFieldProps extends Pick<ProFieldTreeSelectProps, "fieldProps"> {
  type?: "treeSelect";
}

interface VirtualizedSelectProps extends Pick<ProFieldVirtualizedSelectProps, "fieldProps"> {
  type?: "virtualizedSelect";
}

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
  | TreeSelectFieldProps
  | VirtualizedSelectProps;

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
  UploadAvatar: DefineComponent<ProFieldUploadAvatarProps>;
  UploadImage: DefineComponent<ProFieldUploadImageProps>;
  Rate: DefineComponent<ProFieldRateProps>;
  Color: DefineComponent<ProFieldColorProps>;
  Cascader: DefineComponent<ProFieldCascaderProps>;
  Slider: DefineComponent<ProFieldSliderProps>;
  Progress: DefineComponent<ProFieldProgressProps>;
  VirtualizedSelect: DefineComponent<ProFieldVirtualizedSelectProps>;
};

export type ProFieldProps = Omit<GeneratePropTypes<typeof proFieldProps>, "type" | "fieldProps"> & FieldProps;
