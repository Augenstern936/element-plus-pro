/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-07-03 17:51:19
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import ProFieldAvatar from "./Avatar";
import ProFieldCascader from "./Cascader";
import { ProFieldCheckbox, ProFieldCheckboxButton } from "./Checkbox";
import ProFieldColor from "./Color";
import {
	ProFieldDate,
	ProFieldDateMonth,
	ProFieldDateMonthRange,
	ProFieldDateRange,
	ProFieldDateTime,
	ProFieldDateTimeRange,
	ProFieldDateWeek,
	ProFieldDateYear,
	ProFieldDates,
} from "./Date";
import ProFieldImage from "./Image";
import { ProFieldNumber, ProFieldPassword, ProFieldText, ProFieldTextarea } from "./Input";
import ProFieldProgress from "./Progress";
import { ProFieldRadio, ProFieldRadioButton } from "./Radio";
import ProFieldRate from "./Rate";
import ProFieldSelect from "./Select";
import ProFieldSlider from "./Slider";
import ProFieldSwitch from "./Switch";
import { ProFieldTime, ProFieldTimeRange } from "./TimePicker";
import ProFieldTimeSelect from "./TimeSelect";
import ProFieldTreeSelect from "./TreeSelect";

export * from "./Avatar";
export * from "./Cascader";
export * from "./Checkbox";
export * from "./Color";
export * from "./Date";
export * from "./Image";
export * from "./Input";
export * from "./Progress";
export * from "./Radio";
export * from "./Rate";
export * from "./Select";
export * from "./Slider";
export * from "./Switch";
export * from "./TimePicker";
export * from "./TimeSelect";
export * from "./TreeSelect";

export default {
	text: ProFieldText,
	number: ProFieldNumber,
	password: ProFieldPassword,
	textarea: ProFieldTextarea,
	date: ProFieldDate,
	dates: ProFieldDates,
	dateRange: ProFieldDateRange,
	dateYear: ProFieldDateYear,
	dateMonth: ProFieldDateMonth,
	dateMonthRange: ProFieldDateMonthRange,
	dateWeek: ProFieldDateWeek,
	dateTime: ProFieldDateTime,
	dateTimeRange: ProFieldDateTimeRange,
	time: ProFieldTime,
	timeRange: ProFieldTimeRange,
	timeSelect: ProFieldTimeSelect,
	select: ProFieldSelect,
	treeSelect: ProFieldTreeSelect,
	checkbox: ProFieldCheckbox,
	checkboxButton: ProFieldCheckboxButton,
	radio: ProFieldRadio,
	radioButton: ProFieldRadioButton,
	switch: ProFieldSwitch,
	avatar: ProFieldAvatar,
	image: ProFieldImage,
	rate: ProFieldRate,
	color: ProFieldColor,
	cascader: ProFieldCascader,
	slider: ProFieldSlider,
	progress: ProFieldProgress,
};
