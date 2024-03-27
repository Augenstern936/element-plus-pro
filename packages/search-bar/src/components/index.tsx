/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-03-26 23:44:29
 * @FilePath: \element-plus-pro\packages\search-bar\src\components\index.tsx
 */
import Input from './Input';
import Date from './Date';
import Select from './Select';
import Radio from './Radio';
import Rate from './Rate';
import Switch from './Switch';
import Slider from './Slider';
import Color from './Color';
import { FunctionalComponent, PropType, defineComponent, provide } from 'vue';
import type { SearchBarFormItem } from '../typing';

const components = {
	text: Input.Text,
	password: Input.Password,
	textarea: Input.Textarea,
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

interface RenderProps {
	formItem: SearchBarFormItem;
	emitter: Record<string, any>;
}

const Render: FunctionalComponent<RenderProps> = defineComponent((props: RenderProps) => {
	const valueType = props.formItem?.valueType as keyof typeof components;
	const isHasComponent = valueType != 'select' && components[valueType];
	const isSelect = isHasComponent ? false : Array.isArray(props.formItem.valueOptions);
	const type = isSelect ? 'select' : valueType || 'text';
	console.log(type, 'type');

	console.log(
		{ ...props, formItem: { ...props.formItem, valueType: type } },
		'{ ...props, formItem: { ...props.formItem, valueType: type } }'
	);

	provide(type, { ...props, formItem: { ...props.formItem, valueType: type } });

	const RenderEelement = components[type];

	return () => <RenderEelement />;
});

Render.props = {
	formItem: {
		type: Object as PropType<SearchBarFormItem>,
		required: true,
	},
	emitter: {
		type: Object as PropType<{ [x: string]: any }>,
		required: true,
	},
} as any;

export default Render;
