/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-23 16:15:57
 * @FilePath: \element-plus-pro\packages\field\src\components\Slider\index.tsx
 */
import { useVModel } from '@vueuse/core';
import { ElSlider, ElText } from 'element-plus';
import 'element-plus/theme-chalk/src/slider.scss';
import { FunctionalComponent, defineComponent } from 'vue';
import { ProFieldSliderProps, proFieldSliderProps } from './props';

const ProFieldSlider = defineComponent<ProFieldSliderProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		const render = () => {
			if (props.mode === 'read') {
				return <ElText>{model.value}</ElText>;
			}
			if (props.mode === 'edit') {
				return <ElSlider {...props} v-model={model.value} />;
			}
			return '';
		};

		return render;
	},
	{
		name: 'ProFieldSlider',
	}
) as unknown as FunctionalComponent<ProFieldSliderProps>;

ProFieldSlider.props = proFieldSliderProps as any;

export * from './props';

export { ProFieldSlider };

export default ProFieldSlider;
