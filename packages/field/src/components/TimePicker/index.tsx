/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:18:41
 * @FilePath: \element-plus-pro\packages\field\src\components\TimePicker\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElTimePicker, timePickerDefaultProps } from "element-plus";
// import "element-plus/theme-chalk/src/time-picker.scss";
import { CSSProperties, DefineComponent, PropType, defineComponent } from "vue-demi";
import { BaseTimePickerProps, ProFieldTimeProps, ProFieldTimeRangeProps } from "./props";

const BaseTimePicker = defineComponent<BaseTimePickerProps>((props, ctx) => {
	const model = useVModel(props, "modelValue", ctx.emit);

	return () => <ElTimePicker {...props} v-model={model.value} />;
}) as DefineComponent<BaseTimePickerProps>;

BaseTimePicker.props = {
	...timePickerDefaultProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
} as any;

export const ProFieldTime = (props: ProFieldTimeProps) => {
	return <BaseTimePicker {...props} isRange={false} />;
};

export const ProFieldTimeRange = (props: ProFieldTimeRangeProps) => {
	return <BaseTimePicker {...props} isRange={true} />;
};

export * from "./props";

