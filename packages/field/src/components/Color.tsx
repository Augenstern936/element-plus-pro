/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:42:12
 * @FilePath: \element-plus-pro\packages\field\src\components\Color.tsx
 */
import 'element-plus/theme-chalk/src/color-picker.scss';
import { colorPickerProps, ElColorPicker } from 'element-plus';
import type { ColorPickerProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';

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
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElColorPicker v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldColor',
	}
) as FunctionalComponent<ProFieldColorProps>;

ProFieldColor.props = colorPickerProps;

export default ProFieldColor;
