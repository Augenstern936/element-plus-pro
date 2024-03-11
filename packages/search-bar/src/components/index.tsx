import Input from './Input';
import Date from './Date';
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
	// 'select',
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
	const type = (props.formItem?.valueType as keyof typeof components) || 'text';

	provide(type, props);

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
