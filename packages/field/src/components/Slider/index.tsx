/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:41:29
 * @FilePath: \element-plus-pro\packages\field\src\components\Slider\index.tsx
 */
import { ElSlider } from 'element-plus';
import 'element-plus/theme-chalk/src/slider.scss';
import { FunctionalComponent, defineComponent } from 'vue';
import { ProFieldSliderProps, proFieldSliderProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldSlider = defineComponent<ProFieldSliderProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElSlider {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldSlider',
	}
) as unknown as FunctionalComponent<ProFieldSliderProps>;

ProFieldSlider.props = proFieldSliderProps as any;

export * from './props';

export { ProFieldSlider };

export default ProFieldSlider;
