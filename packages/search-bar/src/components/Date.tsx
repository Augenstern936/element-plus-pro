import { ElDatePicker } from 'element-plus';
import type { DatePickType } from 'element-plus';
import { FunctionalComponent, defineComponent, inject, ref } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';

const Render = defineComponent(({ type }: { type: DatePickType }) => {
	enum TypeEnum {
		'date' = 'date',
		'dates' = 'dates',
		'datetime' = 'dateTime',
		'week' = 'dateWeek',
		'month' = 'dateMonth',
		'year' = 'dateYear',
		'daterange' = 'dateRange',
		'datetimerange' = 'dateTimeRange',
		'monthrange' = 'dateMonthRange',
	}

	const props = inject(TypeEnum[type], {}) as any;

	const data = ref('');

	return () => (
		<ElDatePicker
			v-model={data.value}
			placeholder={formatPlaceholder(props.formItem.label, type) as string}
			type={type}
			clearable
			onChange={(v: unknown) => props.emitter.emit('value-change', { field: props.formItem.dataField, value: v })}
		/>
	);
}) as FunctionalComponent<any>;

Render.props = {
	type: {
		type: String,
		default: 'text',
	},
};

export default {
	Default: () => <Render type='date' />,
	Dates: () => <Render type='dates' />,
	DateTime: () => <Render type='datetime' />,
	DateWeek: () => <Render type='week' />,
	DateMonth: () => <Render type='month' />,
	DateYear: () => <Render type='year' />,
	DateRange: () => <Render type='daterange' />,
	DateTimeRange: () => <Render type='datetimerange' />,
	DateMonthRange: () => <Render type='monthrange' />,
};