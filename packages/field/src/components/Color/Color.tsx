/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:24:51
 * @FilePath: \element-plus-pro\packages\field\src\components\Color.tsx
 */
import type { ColorPickerProps } from "element-plus";
import { colorPickerProps, ElColorPicker } from "element-plus";
import "element-plus/theme-chalk/src/color-picker.scss";
import { computed, CSSProperties, defineComponent, FunctionalComponent } from "vue";

export interface ProFieldColorProps extends ColorPickerProps {
	style?: CSSProperties;
}

const ProFieldColor = defineComponent<ProFieldColorProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElColorPicker v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldColor",
	}
) as unknown as FunctionalComponent<ProFieldColorProps>;

ProFieldColor.props = colorPickerProps;

export default ProFieldColor;
