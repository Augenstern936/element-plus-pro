/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-04-15 17:28:33
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import Avatar from "./Avatar";
import Cascader from "./Cascader";
import ProFieldCheckbox from "./Checkbox";
import Color from "./Color";
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
import Image from "./Image";
import { ProFieldPassword, ProFieldText, ProFieldTextarea } from "./Input";
import Progress from "./Progress";
import ProFieldRadio from "./Radio";
import Rate from "./Rate";
import ProFieldSelect from "./Select";
import Slider from "./Slider";
import Switch from "./Switch";
import { ProFieldTime, ProFieldTimeRange } from "./TimePicker";
import ProFieldTimeSelect from "./TimeSelect";
import ProFieldTreeSelect from "./TreeSelect";

export * from "./Avatar";
export * from "./Cascader";
export * from "./Checkbox";
export * from "./Color";
export * from "./Image";
export * from "./Progress";
export * from "./Radio";
export * from "./Rate";
// export * from "./Select";
export * from "./Slider";
export * from "./Switch";
export * from "./TimeSelect";
export * from "./TreeSelect";

export default {
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
	switch: Switch,
	avatar: Avatar,
	image: Image,
	rate: Rate,
	color: Color,
	cascader: Cascader,
	slider: Slider,
	progress: Progress,
};
