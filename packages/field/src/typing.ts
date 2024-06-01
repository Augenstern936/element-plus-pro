/*
 * @Description:
 * @Date: 2024-05-28 16:49:08
 * @LastEditTime: 2024-06-02 00:56:01
 */
import { FunctionalComponent } from 'vue';
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
	ProFieldSelectProps,
	ProFieldSliderProps,
	ProFieldSwitchProps,
	ProFieldTextProps,
	ProFieldTextareaProps,
	ProFieldTimeSelectProps,
	ProFieldTreeSelectProps,
	components,
} from './components';

type TextFieldProps = {
	type: 'text';
	fieldProps?: ProFieldTextProps;
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

type AvatarFieldProps = {
	type?: 'avatar';
	fieldProps?: ProFieldAvatarProps;
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

type TimeSelectFieldProps = {
	type?: 'timeSelect';
	fieldProps?: ProFieldTimeSelectProps;
};

type TreeSelectFieldProps = {
	type?: 'treeSelect';
	fieldProps?: ProFieldTreeSelectProps;
};

export type ProFieldMode = 'read' | 'edit';

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
