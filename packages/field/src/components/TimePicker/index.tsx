/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:23:57
 * @FilePath: \element-plus-pro\packages\field\src\components\TimePicker.tsx
 */
import { ElTimePicker, timePickerDefaultProps } from "element-plus";
import "element-plus/theme-chalk/src/time-picker.scss";
import { CSSProperties, FunctionalComponent, PropType, computed, defineComponent } from "vue";
import { BaseTimePickerProps, ProFieldTimeProps, ProFieldTimeRangeProps } from "./typing";

const BaseTimePicker = defineComponent<BaseTimePickerProps>((props, ctx) => {
	const state = computed({
		get: () => {
			return props.modelValue;
		},
		set: (value) => {
			ctx.emit("upTime:modelValue", value);
		},
	});

	return () => <ElTimePicker v-model={state.value} {...props} />;
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
