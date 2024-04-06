/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 16:44:26
 * @FilePath: \element-plus-pro\packages\form\src\components\Slider.tsx
 */
import { sliderProps, ElSlider } from 'element-plus';
import type { SliderProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import 'element-plus/theme-chalk/src/slider.scss';

export interface ProFormSliderProps extends SliderProps {
	style?: CSSProperties;
}

const ProFormSlider = defineComponent<ProFormSliderProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElSlider v-model={state.value} {...props} />;
	},
	{
		name: 'ProFormSlider',
	}
) as FunctionalComponent<ProFormSliderProps>;

ProFormSlider.props = sliderProps;

export default ProFormSlider;
