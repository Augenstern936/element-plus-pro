/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-07-09 16:58:21
 */
import { DefineComponent } from "vue-demi";
import components, * as Types from "./components";

type TextFieldProps = {
	type?: "text";
	fieldProps?: Types.ProFieldTextProps;
};

type NumberFieldProps = {
	type?: "number";
	fieldProps?: Types.ProFieldNumberProps;
};

type PasswordFieldProps = {
	type?: "password";
	fieldProps?: Types.ProFieldPasswordProps;
};

type TextareaFieldProps = {
	type?: "textarea";
	fieldProps?: Types.ProFieldTextareaProps;
};

type DateFieldProps = {
	type: "date";
	fieldProps?: Types.ProFieldDateProps;
};

type DateRangeFieldProps = {
	type: "dateRange";
	fieldProps?: Types.ProFieldDateRangeProps;
};

type DatesFieldProps = {
	type: "dates";
	fieldProps?: Types.ProFieldDatesProps;
};

type DateYearFieldProps = {
	type: "dateYear";
	fieldProps?: Types.ProFieldDateYearProps;
};

type DateMonthFieldProps = {
	type: "dateMonth";
	fieldProps?: Types.ProFieldDateMonthProps;
};

type DateMonthRangeFieldProps = {
	type: "dateMonthRange";
	fieldProps?: Types.ProFieldDateMonthRangeProps;
};

type DateTimeWeekFieldProps = {
	type: "dateWeek";
	fieldProps?: Types.ProFieldDateWeekProps;
};

type DateTimeFieldProps = {
	type: "dateTime";
	fieldProps?: Types.ProFieldDateTimeProps;
};

type DateTimeRangeFieldProps = {
	type: "dateTimeRange";
	fieldProps?: Types.ProFieldDateTimeRangeProps;
};

type TimeFieldProps = {
	type: "time";
	fieldProps?: Types.ProFieldTimeProps;
};

type TimeRangeFieldProps = {
	type: "timeRange";
	fieldProps?: Types.ProFieldTimeRangeProps;
};

type TimeSelectFieldProps = {
	type: "timeSelect";
	fieldProps?: Types.ProFieldTimeSelectProps;
};

type SelectFieldProps = {
	type: "select";
	fieldProps?: Types.ProFieldSelectProps;
};

type AvatarFieldProps = {
	type?: "avatar";
	fieldProps?: Types.ProFieldAvatarProps;
};

type SwitchFieldProps = {
	type?: "switch";
	fieldProps?: Types.ProFieldSwitchProps;
};

type CascaderFieldProps = {
	type?: "cascader";
	fieldProps?: Types.ProFieldCascaderProps;
};

type CheckboxFieldProps = {
	type?: "checkbox" | "checkboxButton";
	fieldProps?: Types.ProFieldCheckboxProps;
};

type ColorFieldProps = {
	type?: "color";
	fieldProps?: Types.ProFieldColorProps;
};

type ImageFieldProps = {
	type?: "image";
	fieldProps?: Types.ProFieldImageProps;
};

type ProgressFieldProps = {
	type?: "progress";
	fieldProps?: Types.ProFieldProgressProps;
};

type RateFieldProps = {
	type?: "rate";
	fieldProps?: Types.ProFieldRateProps;
};

type RadioFieldProps = {
	type?: "radio" | "radioButton";
	fieldProps?: Types.ProFieldRadioProps;
};

type SliderFieldProps = {
	type?: "slider";
	fieldProps?: Types.ProFieldSliderProps;
};

type TreeSelectFieldProps = {
	type?: "treeSelect";
	fieldProps?: Types.ProFieldTreeSelectProps;
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
	Text: DefineComponent<Types.ProFieldTextProps>;
	Number: DefineComponent<Types.ProFieldNumberProps>;
	Password: DefineComponent<Types.ProFieldPasswordProps>;
	Textarea: DefineComponent<Types.ProFieldTextareaProps>;
	Date: DefineComponent<Types.ProFieldDateProps>;
	Dates: DefineComponent<Types.ProFieldDatesProps>;
	DateTime: DefineComponent<Types.ProFieldDateTimeProps>;
	DateWeek: DefineComponent<Types.ProFieldDateWeekProps>;
	DateMonth: DefineComponent<Types.ProFieldDateMonthProps>;
	DateYear: DefineComponent<Types.ProFieldDateYearProps>;
	DateRange: DefineComponent<Types.ProFieldDateRangeProps>;
	DateTimeRange: DefineComponent<Types.ProFieldDateTimeRangeProps>;
	DateMonthRange: DefineComponent<Types.ProFieldDateMonthRangeProps>;
	Time: DefineComponent<Types.ProFieldTimeProps>;
	TimeRange: DefineComponent<Types.ProFieldTimeRangeProps>;
	TimeSelect: DefineComponent<Types.ProFieldTimeSelectProps>;
	Select: DefineComponent<Types.ProFieldSelectProps>;
	TreeSelect: DefineComponent<Types.ProFieldTreeSelectProps>;
	Checkbox: DefineComponent<Types.ProFieldCheckboxProps>;
	CheckboxButton: DefineComponent<Types.ProFieldCheckboxProps>;
	Radio: DefineComponent<Types.ProFieldRadioProps>;
	RadioButton: DefineComponent<Types.ProFieldRadioProps>;
	Switch: DefineComponent<Types.ProFieldSwitchProps>;
	Avatar: DefineComponent<Types.ProFieldAvatarProps>;
	Image: DefineComponent<Types.ProFieldImageProps>;
	Rate: DefineComponent<Types.ProFieldRateProps>;
	Color: DefineComponent<Types.ProFieldColorProps>;
	Cascader: DefineComponent<Types.ProFieldCascaderProps>;
	Slider: DefineComponent<Types.ProFieldSliderProps>;
	Progress: DefineComponent<Types.ProFieldProgressProps>;
};
