/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-06-22 19:42:28
 */
import { FunctionalComponent } from 'vue';
import type {
	ProDatePickerPropsMap,
	ProFieldAvatarProps,
	ProFieldCascaderProps,
	ProFieldCheckboxProps,
	ProFieldColorProps,
	ProFieldImageProps,
	ProFieldNumberProps,
	ProFieldPasswordProps,
	ProFieldProgressProps,
	ProFieldRadioProps,
	ProFieldRateProps,
	ProFieldSelectProps,
	ProFieldSliderProps,
	ProFieldSwitchProps,
	ProFieldTextProps,
	ProFieldTextareaProps,
	ProFieldTimeProps,
	ProFieldTimeRangeProps,
	ProFieldTimeSelectProps,
	ProFieldTreeSelectProps,
	components,
} from './components';

type TextFieldProps = {
	type?: 'text';
	fieldProps?: ProFieldTextProps;
};

type NumberFieldProps = {
	type?: 'number';
	fieldProps?: ProFieldNumberProps;
};

type PasswordFieldProps = {
	type?: 'password';
	fieldProps?: ProFieldPasswordProps;
};

type TextareaFieldProps = {
	type?: 'textarea';
	fieldProps?: ProFieldTextareaProps;
};

type DateFieldProps = {
	type: 'date';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateProps;
};

type DateRangeFieldProps = {
	type: 'dateRange';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateRangeProps;
};

type DatesFieldProps = {
	type: 'dates';
	fieldProps?: ProDatePickerPropsMap.ProFieldDatesProps;
};

type DateYearFieldProps = {
	type: 'dateYear';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateYearProps;
};

type DateMonthFieldProps = {
	type: 'dateMonth';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateMonthProps;
};

type DateMonthRangeFieldProps = {
	type: 'dateMonthRange';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateMonthRangeProps;
};

type DateTimeWeekFieldProps = {
	type: 'dateWeek';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateWeekProps;
};

type DateTimeFieldProps = {
	type: 'dateTime';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateTimeProps;
};

type DateTimeRangeFieldProps = {
	type: 'dateTimeRange';
	fieldProps?: ProDatePickerPropsMap.ProFieldDateTimeRangeProps;
};

type TimeFieldProps = {
	type: 'time';
	fieldProps?: ProFieldTimeProps;
};

type TimeRangeFieldProps = {
	type: 'timeRange';
	fieldProps?: ProFieldTimeRangeProps;
};

type TimeSelectFieldProps = {
	type: 'timeSelect';
	fieldProps?: ProFieldTimeSelectProps;
};

type SelectFieldProps = {
	type: 'select';
	fieldProps?: ProFieldSelectProps;
};

type AvatarFieldProps = {
	type?: 'avatar';
	fieldProps?: ProFieldAvatarProps;
};

type SwitchFieldProps = {
	type?: 'switch';
	fieldProps?: ProFieldSwitchProps;
};

type CascaderFieldProps = {
	type?: 'cascader';
	fieldProps?: ProFieldCascaderProps;
};

type CheckboxFieldProps = {
	type?: 'checkbox' | 'checkboxButton';
	fieldProps?: ProFieldCheckboxProps;
};

type ColorFieldProps = {
	type?: 'color';
	fieldProps?: ProFieldColorProps;
};

type ImageFieldProps = {
	type?: 'image';
	fieldProps?: ProFieldImageProps;
};

type ProgressFieldProps = {
	type?: 'progress';
	fieldProps?: ProFieldProgressProps;
};

type RateFieldProps = {
	type?: 'rate';
	fieldProps?: ProFieldRateProps;
};

type RadioFieldProps = {
	type?: 'radio' | 'radioButton';
	fieldProps?: ProFieldRadioProps;
};

type SliderFieldProps = {
	type?: 'slider';
	fieldProps?: ProFieldSliderProps;
};

type TreeSelectFieldProps = {
	type?: 'treeSelect';
	fieldProps?: ProFieldTreeSelectProps;
};

export type ProFieldMode = 'read' | 'edit';

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

export type ProFieldSuperProps<T> = FunctionalComponent<T> & {
	Text: FunctionalComponent<ProFieldTextProps>;
	Number: FunctionalComponent<ProFieldNumberProps>;
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
	Time: FunctionalComponent<ProFieldTimeProps>;
	TimeRange: FunctionalComponent<ProFieldTimeRangeProps>;
	TimeSelect: FunctionalComponent<ProFieldTimeSelectProps>;
	Select: FunctionalComponent<ProFieldSelectProps>;
	TreeSelect: FunctionalComponent<ProFieldTreeSelectProps>;
	Checkbox: FunctionalComponent<ProFieldCheckboxProps>;
	CheckboxButton: FunctionalComponent<ProFieldCheckboxProps>;
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
