/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-13 23:34:01
 * @LastEditTime: 2024-07-04 16:45:47
 * @FilePath: \element-plus-pro\packages\form\src\components\index.ts
 */
import { ProFormAvatar } from "./Avatar";
import { ProFormCascader } from "./Cascader";
import { ProFormCheckbox, ProFormCheckboxButton } from "./Checkbox";
import { ProFormColor } from "./ColorPicker";
import { ProFormImage } from "./Image";
import { ProFormNumber, ProFormPassword, ProFormText, ProFormTextarea } from "./Input";
import { ProFormRadio, ProFormRadioButton } from "./Radio";
import { ProFormRate } from "./Rate";
import { ProFormSelect } from "./Select";
import { ProFormSlider } from "./Slider";
import { ProFormSwitch } from "./Switch";
import { ProFormTreeSelect } from "./TreeSelect";
import { ProFormVirtualizedSelect } from "./VirtualizedSelect";

export * from "./Avatar";
export * from "./Cascader";
export * from "./Checkbox";
export * from "./ColorPicker";
export * from "./Image";
export * from "./Input";
export * from "./Radio";
export * from "./Rate";
export * from "./Select";
export * from "./Slider";
export * from "./Switch";
export * from "./TreeSelect";
export * from "./VirtualizedSelect";

export default {
	rate: ProFormRate,
	image: ProFormImage,
	color: ProFormColor,
	avatar: ProFormAvatar,
	slider: ProFormSlider,
	switch: ProFormSwitch,
	select: ProFormSelect,
	treeSelect: ProFormTreeSelect,
	text: ProFormText,
	number: ProFormNumber,
	password: ProFormPassword,
	textarea: ProFormTextarea,
	cascader: ProFormCascader,
	radio: ProFormRadio,
	radioButton: ProFormRadioButton,
	checkbox: ProFormCheckbox,
	checkboxButton: ProFormCheckboxButton,
	virtualizedSelect: ProFormVirtualizedSelect,
};
