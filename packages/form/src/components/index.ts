/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-04-02 22:59:25
 * @FilePath: \element-plus-pro\packages\form\src\components\index.ts
 */
import ProFormInput from './Input';
import ProFormDate from './Date';
import ProFormSelect from './Select';
import ProFormCascader from './Cascader';
import ProFormRadio from './Radio';
import ProFormCheckbox from './Checkbox';
import ProFormRate from './Rate';
import ProFormSwitch from './Switch';
import ProFormSlider from './Slider';
import ProFormColor from './Color';
import ProFormTreeSelect from './TreeSelect';
import ProFormTime from './Time';

export {
	ProFormInput,
	ProFormDate,
	ProFormTime,
	ProFormSelect,
	ProFormTreeSelect,
	ProFormCascader,
	ProFormRadio,
	ProFormCheckbox,
	ProFormRate,
	ProFormSwitch,
	ProFormColor,
	ProFormSlider,
};

export default {
	text: ProFormInput,
	password: ProFormInput,
	textarea: ProFormInput,
	date: ProFormDate,
	dates: ProFormDate,
	dateTime: ProFormDate,
	dateWeek: ProFormDate,
	dateMonth: ProFormDate,
	dateYear: ProFormDate,
	dateRange: ProFormDate,
	dateTimeRange: ProFormDate,
	dateMonthRange: ProFormDate,
	time: ProFormTime,
	timeRange: ProFormTime,
	select: ProFormSelect,
	treeSelect: ProFormTreeSelect,
	checkbox: ProFormCheckbox,
	radio: ProFormRadio,
	radioButton: ProFormRadio,
	switch: ProFormSwitch,
	rate: ProFormRate,
	color: ProFormColor,
	cascader: ProFormCascader,
	slider: ProFormSlider,
};
