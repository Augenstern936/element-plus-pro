import Input from './Input';
import { FunctionalComponent, PropType, defineComponent, provide } from 'vue';
import type { SearchBarFormItem } from '../typing';

const components = {
	text: Input.Text,
	password: Input.Password,
	textarea: Input.Textarea,
	// 'date',
	// 'dates',
	// 'dateTime',
	// 'dateWeek',
	// 'dateMonth',
	// 'dateYear',
	// 'dateRange',
	// 'dateTimeRange',
	// 'dateMonthRange',
	// 'time',
	// 'timeRange',
	// 'select',
	// 'treeSelect',
	// 'checkbox',
	// 'radio',
	// 'radioButton',
	// 'switch',
	// 'rate',
	// 'color',
	// 'cascader',
	// 'slider',
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
