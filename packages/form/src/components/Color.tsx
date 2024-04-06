/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:49:20
 * @FilePath: \element-plus-pro\packages\form\src\components\Color.tsx
 */
import { colorPickerProps, ElColorPicker } from 'element-plus';
import type { ColorPickerProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import 'element-plus/theme-chalk/src/color-picker.scss';

export interface ProFormColorProps extends ColorPickerProps {
	style?: CSSProperties;
}

const ProFormColor = defineComponent<ProFormColorProps>(
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
		name: 'ProFormColor',
	}
) as FunctionalComponent<ProFormColorProps>;

ProFormColor.props = colorPickerProps;

export default ProFormColor;
