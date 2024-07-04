/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-07-04 22:34:09
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import ProFormVirtualizedSelect from './VirtualizedSelect';
import ProFieldAvatar from './Avatar';
import ProFieldCascader from './Cascader';
import * as Checkbox from './Checkbox';
import ProFieldColor from './ColorPicker';
import * as DatePicker from './DatePicker';
import ProFieldImage from './Image';
import * as Input from './Input';
import ProFieldProgress from './Progress';
import * as Radio from './Radio';
import ProFieldRate from './Rate';
import ProFieldSelect from './Select';
import ProFieldSlider from './Slider';
import ProFieldSwitch from './Switch';
import * as TimePicker from './TimePicker';
import ProFieldTimeSelect from './TimeSelect';
import ProFieldTreeSelect from './TreeSelect';

export * from './Avatar';
export * from './Cascader';
export * from './Checkbox';
export * from './ColorPicker';
export * from './DatePicker';
export * from './Image';
export * from './Input';
export * from './Progress';
export * from './Radio';
export * from './Rate';
export * from './Select';
export * from './Slider';
export * from './Switch';
export * from './TimePicker';
export * from './TimeSelect';
export * from './TreeSelect';

export default {
	text: Input.ProFieldText,
	number: Input.ProFieldNumber,
	password: Input.ProFieldPassword,
	textarea: Input.ProFieldTextarea,
	date: DatePicker.ProFieldDate,
	dates: DatePicker.ProFieldDates,
	dateRange: DatePicker.ProFieldDateRange,
	dateYear: DatePicker.ProFieldDateYear,
	dateMonth: DatePicker.ProFieldDateMonth,
	dateMonthRange: DatePicker.ProFieldDateMonthRange,
	dateWeek: DatePicker.ProFieldDateWeek,
	dateTime: DatePicker.ProFieldDateTime,
	dateTimeRange: DatePicker.ProFieldDateTimeRange,
	time: TimePicker.ProFieldTime,
	timeRange: TimePicker.ProFieldTimeRange,
	timeSelect: ProFieldTimeSelect,
	select: ProFieldSelect,
	treeSelect: ProFieldTreeSelect,
	virtualizedSelect: ProFormVirtualizedSelect,
	checkbox: Checkbox.ProFieldCheckbox,
	checkboxButton: Checkbox.ProFieldCheckboxButton,
	radio: Radio.ProFieldRadio,
	radioButton: Radio.ProFieldRadioButton,
	switch: ProFieldSwitch,
	avatar: ProFieldAvatar,
	image: ProFieldImage,
	rate: ProFieldRate,
	color: ProFieldColor,
	cascader: ProFieldCascader,
	slider: ProFieldSlider,
	progress: ProFieldProgress,
};
