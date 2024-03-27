/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-03-27 23:29:08
 * @FilePath: \element-plus-pro\packages\form\src\components\index.tsx
 */
import ProInput from './Input';
import Date from './Date';
import Select from './Select';
import Radio from './Radio';
import Rate from './Rate';
import Switch from './Switch';
import Slider from './Slider';
import Color from './Color';

export default {
	text: ProInput,
	password: ProInput,
	textarea: ProInput,
	date: Date.Default,
	dates: Date.Dates,
	dateTime: Date.DateTime,
	dateWeek: Date.DateWeek,
	dateMonth: Date.DateMonth,
	dateYear: Date.DateYear,
	dateRange: Date.DateRange,
	dateTimeRange: Date.DateTimeRange,
	dateMonthRange: Date.DateMonthRange,
	// 'time',
	// 'timeRange',
	select: Select,
	// 'treeSelect',
	// 'checkbox',
	radio: Radio.Default,
	radioButton: Radio.RadioButton,
	switch: Switch,
	rate: Rate,
	color: Color,
	// 'cascader',
	slider: Slider,
};
