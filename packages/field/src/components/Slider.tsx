/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 14:58:35
 * @FilePath: \element-plus-pro\packages\field\src\components\Slider.tsx
 */
import 'element-plus/theme-chalk/src/slider.scss';
import { sliderProps, ElSlider } from 'element-plus';
import type { SliderProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';

export interface ProFieldSliderProps extends SliderProps {
	style?: CSSProperties;
}

const ProFieldSlider = defineComponent<ProFieldSliderProps>(
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
		name: 'ProFieldSlider',
	}
) as FunctionalComponent<ProFieldSliderProps>;

ProFieldSlider.props = sliderProps;

export default ProFieldSlider;
