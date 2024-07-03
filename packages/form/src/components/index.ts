/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-13 23:34:01
 * @LastEditTime: 2024-07-03 22:50:24
 * @FilePath: \element-plus-pro\packages\form\src\components\index.ts
 */
import { ProFormRate } from './Rate';
import { ProFormColor } from './Color';
import { ProFormImage } from './Image';
import { ProFormSelect } from './Select';
import { ProFormSwitch } from './Switch';
import { ProFormSlider } from './Slider';
import { ProFormAvatar } from './Avatar';
import { ProFormCascader } from './Cascader';
import { ProFormRadio, ProFormRadioButton } from './Radio';
import { ProFormCheckbox, ProFormCheckboxButton } from './Checkbox';
import { ProFormText, ProFormNumber, ProFormPassword, ProFormTextarea } from './Input';

export * from './Cascader';
export * from './Checkbox';
export * from './Select';
export * from './Switch';
export * from './Slider';
export * from './Avatar';
export * from './Input';
export * from './Color';
export * from './Radio';
export * from './Image';
export * from './Rate';

export default {
	rate: ProFormRate,
	image: ProFormImage,
	color: ProFormColor,
	avatar: ProFormAvatar,
	slider: ProFormSlider,
	switch: ProFormSwitch,
	select: ProFormSelect,
	text: ProFormText,
	number: ProFormNumber,
	password: ProFormPassword,
	textarea: ProFormTextarea,
	cascader: ProFormCascader,
	radio: ProFormRadio,
	radioButton: ProFormRadioButton,
	checkbox: ProFormCheckbox,
	checkboxButton: ProFormCheckboxButton,
};
