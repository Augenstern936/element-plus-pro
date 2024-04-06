/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:54:03
 * @FilePath: \element-plus-pro\packages\form\src\components\Time.tsx
 */
import { timePickerDefaultProps, ElTimePicker } from 'element-plus';
import type { TimePickerDefaultProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, PropType, computed, defineComponent } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';
import 'element-plus/theme-chalk/src/time-picker.scss';

export interface ProFormTimeProps extends TimePickerDefaultProps {
	type: 'time' | 'timeRange';
	label?: string;
	style?: CSSProperties;
}

const ProFormTime = defineComponent<ProFormTimeProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('upTime:modelValue', value);
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

		return () => <ElTimePicker v-model={state.value} {...placeholder.value} {...props} />;
	},
	{
		name: 'ProFormTime',
	}
) as FunctionalComponent<ProFormTimeProps>;

ProFormTime.props = {
	...timePickerDefaultProps,
	type: {
		type: String as PropType<'time' | 'timeRange'>,
		default: 'time',
	},
	label: {
		type: String,
		default: '',
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export default ProFormTime;
