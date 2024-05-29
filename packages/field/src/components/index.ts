/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-05-29 10:50:28
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import ProFieldAvatar from "./Avatar";
import ProFieldCascader from "./Cascader";
import ProFieldCheckbox from "./Checkbox";
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
import { ProFieldPassword, ProFieldText, ProFieldTextarea } from "./Input";
import ProFieldProgress from "./Progress";
import ProFieldRadio from "./Radio";
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
export * from "./TimeSelect";
export * from "./TreeSelect";

export const components = {
	text: ProFieldText,
	password: ProFieldPassword,
	textarea: ProFieldTextarea,
	date: ProFieldDate,
	dates: ProFieldDates,
	dateTime: ProFieldDateTime,
	dateWeek: ProFieldDateWeek,
	dateMonth: ProFieldDateMonth,
	dateYear: ProFieldDateYear,
	dateRange: ProFieldDateRange,
	dateTimeRange: ProFieldDateTimeRange,
	dateMonthRange: ProFieldDateMonthRange,
	time: ProFieldTime,
	timeRange: ProFieldTimeRange,
	timeSelect: ProFieldTimeSelect,
	select: ProFieldSelect,
	treeSelect: ProFieldTreeSelect,
	checkbox: ProFieldCheckbox,
	radio: ProFieldRadio,
	radioButton: ProFieldRadio,
	switch: ProFieldSwitch,
	avatar: ProFieldAvatar,
	image: ProFieldImage,
	rate: ProFieldRate,
	color: ProFieldColor,
	cascader: ProFieldCascader,
	slider: ProFieldSlider,
	progress: ProFieldProgress,
};
