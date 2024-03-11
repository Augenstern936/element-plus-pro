import { ElDatePicker } from 'element-plus';
import type { DatePickType } from 'element-plus';
import { FunctionalComponent, defineComponent, inject, ref } from 'vue';

const Render = defineComponent(({ type }: { type: DatePickType }) => {
	const props = inject(type, {}) as any;

	const data = ref('');

	return () => (
		<ElDatePicker
			v-model={data.value}
			type={type}
			clearable
			onChange={(v) => props.emitter.emit('value-change', { field: props.formItem.dataField, value: v })}
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
