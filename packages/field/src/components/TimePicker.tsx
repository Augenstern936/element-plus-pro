/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 22:43:21
 * @FilePath: \element-plus-pro\packages\field\src\components\TimePicker.tsx
 */
import 'element-plus/theme-chalk/src/time-picker.scss';
import { timePickerDefaultProps, ElTimePicker } from 'element-plus';
import type { TimePickerDefaultProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, PropType, computed, defineComponent } from 'vue';

export interface ProFieldTimeProps extends TimePickerDefaultProps {
	type: 'time' | 'timeRange';
	style?: CSSProperties;
}

const ProFieldTime = defineComponent<ProFieldTimeProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('upTime:modelValue', value);
			},
		});

		return () => <ElTimePicker v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldTime',
	}
) as FunctionalComponent<ProFieldTimeProps>;

ProFieldTime.props = {
	...timePickerDefaultProps,
	type: {
		type: String as PropType<'time' | 'timeRange'>,
		default: 'time',
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export default ProFieldTime;
