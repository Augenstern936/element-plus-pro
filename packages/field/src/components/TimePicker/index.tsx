/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:43:07
 * @FilePath: \element-plus-pro\packages\field\src\components\TimePicker\index.tsx
 */
import { ElTimePicker, timePickerDefaultProps } from 'element-plus';
import 'element-plus/theme-chalk/src/time-picker.scss';
import { CSSProperties, FunctionalComponent, PropType, defineComponent } from 'vue';
import { BaseTimePickerProps, ProFieldTimeProps, ProFieldTimeRangeProps } from './props';
import { useVModel } from '@vueuse/core';

const BaseTimePicker = defineComponent<BaseTimePickerProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	return () => <ElTimePicker {...props} v-model={model.value} />;
}) as unknown as FunctionalComponent<BaseTimePickerProps>;

BaseTimePicker.props = {
	...timePickerDefaultProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export const ProFieldTime = (props: ProFieldTimeProps) => {
	return <BaseTimePicker {...props} isRange={false} />;
};

export const ProFieldTimeRange = (props: ProFieldTimeRangeProps) => {
	return <BaseTimePicker {...props} isRange={true} />;
};
