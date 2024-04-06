/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 16:42:54
 * @FilePath: \element-plus-pro\packages\form\src\components\Date.tsx
 */
import { datePickerProps, ElDatePicker } from 'element-plus';
import type { DatePickerProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, PropType, computed, defineComponent } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';
import 'element-plus/theme-chalk/src/date-picker.scss';

export interface ProFormDateProps extends DatePickerProps {
	label?: string;
	style?: CSSProperties;
}

const ProFormDate = defineComponent<ProFormDateProps>(
	(props, ctx) => {
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
	},
	{
		name: 'ProFormDate',
	}
) as FunctionalComponent<ProFormDateProps, any>;

ProFormDate.props = {
	...datePickerProps,
	label: {
		type: String,
		default: '',
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export default ProFormDate;
