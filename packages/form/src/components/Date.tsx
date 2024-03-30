import { datePickerProps, ElDatePicker } from 'element-plus';
import type { DatePickerProps } from 'element-plus';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';

interface ProDateProps extends DatePickerProps {
	label?: string;
}

const ProDate = defineComponent<ProDateProps>((props, ctx) => {
	const state = computed({
		get: () => {
			return props.modelValue;
		},
		set: (value) => {
			ctx.emit('update:modelValue', value);
		},
	});

	const placeholder = computed(() => {
		const value = formatPlaceholder(props.label, props.type) as string | [string, string];

		if (Array.isArray(value)) {
			return {
				startPlaceholder: value[0],
				endPlaceholder: value[1],
			};
		}

		return {
			placeholder: value,
		};
	});

	return () => <ElDatePicker v-model={state.value} {...placeholder.value} {...props} />;
}) as FunctionalComponent<ProDateProps>;

ProDate.props = {
	...datePickerProps,
	label: {
		type: String,
		default: '',
	},
};

export default ProDate;
