/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:42:24
 * @FilePath: \element-plus-pro\packages\field\src\components\Date.tsx
 */
import 'element-plus/theme-chalk/src/date-picker.scss';
import { datePickerProps, ElDatePicker } from 'element-plus';
import type { DatePickerProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, PropType, computed, defineComponent } from 'vue';

export interface ProFieldDateProps extends DatePickerProps {
	style?: CSSProperties;
}

const ProFieldDate = defineComponent<ProFieldDateProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElDatePicker v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldDate',
	}
) as FunctionalComponent<ProFieldDateProps, any>;

ProFieldDate.props = {
	...datePickerProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export default ProFieldDate;
