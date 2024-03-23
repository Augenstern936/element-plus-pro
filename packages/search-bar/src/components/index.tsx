import Input from './Input';
import Date from './Date';
import Select from './Select';
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
	// 'radio',
	// 'radioButton',
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
