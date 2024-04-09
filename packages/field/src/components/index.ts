/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-04-10 01:36:17
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import { ProFieldText, ProFieldPassword, ProFieldTextarea } from './Input';
import {
	ProFieldDate,
	ProFieldDates,
	ProFieldDateTime,
	ProFieldDateWeek,
	ProFieldDateMonth,
	ProFieldDateYear,
	ProFieldDateRange,
	ProFieldDateTimeRange,
	ProFieldDateMonthRange,
} from './Date';
import ProFieldSelect from './Select';
import Cascader from './Cascader';
import ProFieldRadio from './Radio';
import ProFieldCheckbox from './Checkbox';
import Rate from './Rate';
import Switch from './Switch';
import Avatar from './Avatar';
import Slider from './Slider';
import Image from './Image';
import Color from './Color';
import Progress from './Progress';
import ProFieldTreeSelect from './TreeSelect';
import TimePicker from './TimePicker';
import TimeSelect from './TimeSelect';

export {
	ProFieldText,
	ProFieldPassword,
	ProFieldTextarea,
	ProFieldDate,
	ProFieldDates,
	ProFieldDateTime,
	ProFieldDateWeek,
	ProFieldDateMonth,
	ProFieldDateYear,
	ProFieldDateRange,
	ProFieldDateTimeRange,
	ProFieldDateMonthRange,
	ProFieldRadio,
	ProFieldCheckbox,
	ProFieldSelect,
	ProFieldTreeSelect,
};

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
	time: TimePicker,
	timeRange: TimePicker,
	timeSelect: TimeSelect,
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
