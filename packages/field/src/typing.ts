/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-05-28 17:16:02
 */
import { FunctionalComponent } from "vue";
import type {
	ProDatePickerPropsMap,
	ProFieldAvatarProps,
	ProFieldCascaderProps,
	ProFieldCheckboxProps,
	ProFieldColorProps,
	ProFieldImageProps,
	ProFieldPasswordProps,
	ProFieldProgressProps,
	ProFieldRadioProps,
	ProFieldRateProps,
	ProFieldSliderProps,
	ProFieldSwitchProps,
	ProFieldTextProps,
	ProFieldTextareaProps,
	ProFieldTimeSelectProps,
	ProFieldTreeSelectProps,
	components,
} from "./components";

type TextFieldProps = {
	type: "text";
	fieldProps: Partial<ProFieldTextProps>;
};

type PasswordFieldProps = {
	type: "password";
	fieldProps: Partial<ProFieldPasswordProps>;
};

type TextareaFieldProps = {
	type: "textarea";
	fieldProps: Partial<ProFieldTextareaProps>;
};

type DateFieldProps = {
	type: "date";
	fieldProps: Partial<ProDatePickerPropsMap.ProFieldDateProps>;
};

type AvatarFieldProps = {
	type: "avatar";
	fieldProps: Partial<ProFieldAvatarProps>;
};

type CascaderFieldProps = {
	type: "cascader";
	fieldProps: Partial<ProFieldCascaderProps>;
};

type CheckboxFieldProps = {
	type: "checkbox";
	fieldProps: Partial<ProFieldCheckboxProps>;
};

type ColorFieldProps = {
	type: "color";
	fieldProps: Partial<ProFieldColorProps>;
};

type ImageFieldProps = {
	type: "image";
	fieldProps: Partial<ProFieldImageProps>;
};

type ProgressFieldProps = {
	type: "progress";
	fieldProps: Partial<ProFieldProgressProps>;
};

type RateFieldProps = {
	type: "rate";
	fieldProps: Partial<ProFieldRateProps>;
};

type RadioFieldProps = {
	type: "radio";
	fieldProps: Partial<ProFieldRadioProps>;
};

type SliderFieldProps = {
	type: "slider";
	fieldProps: Partial<ProFieldSliderProps>;
};

type TimeSelectFieldProps = {
	type: "timeSelect";
	fieldProps: Partial<ProFieldTimeSelectProps>;
};

type TreeSelectFieldProps = {
	type: "treeSelect";
	fieldProps: Partial<ProFieldTreeSelectProps>;
};

export type ProFieldType = keyof typeof components;

export type FieldProps =
	| PasswordFieldProps
	| TextareaFieldProps
	| TextFieldProps
	| DateFieldProps
	| AvatarFieldProps
	| CascaderFieldProps
	| CheckboxFieldProps
	| ColorFieldProps
	| ImageFieldProps
	| ProgressFieldProps
	| RadioFieldProps
	| RateFieldProps
	| SliderFieldProps
	| TimeSelectFieldProps
	| TreeSelectFieldProps;

export type ProFieldSuperProps<T> = FunctionalComponent<T> & {
	Text: FunctionalComponent<ProFieldTextProps>;
	Password: FunctionalComponent<ProFieldPasswordProps>;
	Textarea: FunctionalComponent<ProFieldTextareaProps>;
	Date: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateProps>;
	Dates: FunctionalComponent<ProDatePickerPropsMap.ProFieldDatesProps>;
	DateTime: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateTimeProps>;
	DateWeek: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateWeekProps>;
	DateMonth: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateMonthProps>;
	DateYear: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateYearProps>;
	DateRange: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateRangeProps>;
	DateTimeRange: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateTimeRangeProps>;
	DateMonthRange: FunctionalComponent<ProDatePickerPropsMap.ProFieldDateMonthRangeProps>;
	Time: FunctionalComponent<any>;
	TimeRange: FunctionalComponent<any>;
	TimeSelect: FunctionalComponent<ProFieldTimeSelectProps>;
	Select: FunctionalComponent<any>;
	TreeSelect: FunctionalComponent<ProFieldTreeSelectProps>;
	Checkbox: FunctionalComponent<ProFieldCheckboxProps>;
	Radio: FunctionalComponent<ProFieldRadioProps>;
	RadioButton: FunctionalComponent<ProFieldRadioProps>;
	Switch: FunctionalComponent<ProFieldSwitchProps>;
	Avatar: FunctionalComponent<ProFieldAvatarProps>;
	Image: FunctionalComponent<ProFieldImageProps>;
	Rate: FunctionalComponent<ProFieldRateProps>;
	Color: FunctionalComponent<ProFieldColorProps>;
	Cascader: FunctionalComponent<ProFieldCascaderProps>;
	Slider: FunctionalComponent<ProFieldSliderProps>;
	Progress: FunctionalComponent<ProFieldProgressProps>;
};
