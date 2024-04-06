/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-04-04 22:55:55
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import Input from './Input';
import Date from './Date';
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

export { ProFieldRadio, ProFieldCheckbox, ProFieldSelect, ProFieldTreeSelect };

export default {
	text: Input,
	password: Input,
	textarea: Input,
	date: Date,
	dates: Date,
	dateTime: Date,
	dateWeek: Date,
	dateMonth: Date,
	dateYear: Date,
	dateRange: Date,
	dateTimeRange: Date,
	dateMonthRange: Date,
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
