/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-10-21 22:30:57
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
  ProFieldVirtualizedSelectProps,
  ProFieldDateYearsProps,
  ProFieldDateMonthsProps
} from "./components";
import { proFieldProps } from "./props";

type CommonProps = Omit<GeneratePropTypes<typeof proFieldProps>, "type" | "fieldProps">;

interface TextFieldProps extends CommonProps, Pick<ProFieldTextProps, "fieldProps"> {
  type?: "text";
}

interface NumberFieldProps extends CommonProps, Pick<ProFieldNumberProps, "fieldProps"> {
  type?: "number";
}

interface PasswordFieldProps extends CommonProps, Pick<ProFieldPasswordProps, "fieldProps"> {
  type?: "password";
}

interface TextareaFieldProps extends CommonProps, Pick<ProFieldTextareaProps, "fieldProps"> {
  type?: "textarea";
}

interface DateFieldProps extends CommonProps, Pick<ProFieldDateProps, "fieldProps"> {
  type: "date";
}

interface DateRangeFieldProps extends CommonProps, Pick<ProFieldDateRangeProps, "fieldProps"> {
  type: "dateRange";
}

interface DatesFieldProps extends CommonProps, Pick<ProFieldDatesProps, "fieldProps"> {
  type: "dates";
}

interface DateYearFieldProps extends CommonProps, Pick<ProFieldDateYearProps, "fieldProps"> {
  type: "dateYear";
}

interface DateYearsFieldProps extends CommonProps, Pick<ProFieldDateYearsProps, "fieldProps"> {
  type: "dateYears";
}

interface DateMonthFieldProps extends CommonProps, Pick<ProFieldDateMonthProps, "fieldProps"> {
  type: "dateMonth";
}

interface DateMonthsFieldProps extends CommonProps, Pick<ProFieldDateMonthsProps, "fieldProps"> {
  type: "dateMonths";
}

interface DateMonthRangeFieldProps extends CommonProps, Pick<ProFieldDateMonthRangeProps, "fieldProps"> {
  type: "dateMonthRange";
}

interface DateWeekFieldProps extends CommonProps, Pick<ProFieldDateWeekProps, "fieldProps"> {
  type: "dateWeek";
}

interface DateTimeFieldProps extends CommonProps, Pick<ProFieldDateTimeProps, "fieldProps"> {
  type: "dateTime";
}

interface DateTimeRangeFieldProps extends CommonProps, Pick<ProFieldDateTimeRangeProps, "fieldProps"> {
  type: "dateTimeRange";
}

interface TimeFieldProps extends CommonProps, Pick<ProFieldTimeProps, "fieldProps"> {
  type: "time";
}

interface TimeRangeFieldProps extends CommonProps, Pick<ProFieldTimeRangeProps, "fieldProps"> {
  type: "timeRange";
}

interface TimeSelectFieldProps extends CommonProps, Pick<ProFieldTimeSelectProps, "fieldProps"> {
  type: "timeSelect";
}

interface SelectFieldProps extends CommonProps, Pick<ProFieldSelectProps, "fieldProps"> {
  type: "select";
}

interface AvatarFieldProps extends CommonProps, Pick<ProFieldUploadAvatarProps, "fieldProps"> {
  type?: "uploadAvatar";
}

interface SwitchFieldProps extends CommonProps, Pick<ProFieldSwitchProps, "fieldProps"> {
  type?: "switch";
}

interface CascaderFieldProps extends CommonProps, Pick<ProFieldCascaderProps, "fieldProps"> {
  type?: "cascader";
}

interface CheckboxFieldProps extends CommonProps, Pick<ProFieldCheckboxProps, "fieldProps"> {
  type?: "checkbox" | "checkboxButton";
}

interface ColorFieldProps extends CommonProps, Pick<ProFieldColorProps, "fieldProps"> {
  type?: "color";
}

interface ImageFieldProps extends CommonProps, Pick<ProFieldUploadImageProps, "fieldProps"> {
  type?: "uploadImage";
}

interface ProgressFieldProps extends CommonProps, Pick<ProFieldProgressProps, "fieldProps"> {
  type?: "progress";
}

interface RateFieldProps extends CommonProps, Pick<ProFieldRateProps, "fieldProps"> {
  type?: "rate";
}

interface RadioFieldProps extends CommonProps, Pick<ProFieldRadioProps, "fieldProps"> {
  type?: "radio" | "radioButton";
}

interface SliderFieldProps extends CommonProps, Pick<ProFieldSliderProps, "fieldProps"> {
  type?: "slider";
}

interface TreeSelectFieldProps extends CommonProps, Pick<ProFieldTreeSelectProps, "fieldProps"> {
  type?: "treeSelect";
}

interface VirtualizedSelectProps extends CommonProps, Pick<ProFieldVirtualizedSelectProps, "fieldProps"> {
  type?: "virtualizedSelect";
}

export type ProFieldMode = "read" | "edit";

export type ProFieldType = keyof typeof components;

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
  DateMonths: DefineComponent<ProFieldDateMonthsProps>;
  DateYear: DefineComponent<ProFieldDateYearProps>;
  DateYears: DefineComponent<ProFieldDateYearsProps>;
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

export type ProFieldProps =
  | TextFieldProps
  | NumberFieldProps
  | PasswordFieldProps
  | TextareaFieldProps
  | DateFieldProps
  | DateRangeFieldProps
  | DatesFieldProps
  | DateYearFieldProps
  | DateYearsFieldProps
  | DateMonthFieldProps
  | DateMonthsFieldProps
  | DateMonthRangeFieldProps
  | DateWeekFieldProps
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
