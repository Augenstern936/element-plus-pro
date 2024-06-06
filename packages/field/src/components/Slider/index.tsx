/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-05 17:43:52
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

		return () => (
			<>
				{props.mode === 'read' ? <ElText>{model.value}</ElText> : <ElSlider {...props} v-model={model.value} />}
			</>
		);
	},
	{
		name: 'ProFieldSlider',
	}
) as unknown as FunctionalComponent<ProFieldSliderProps>;

ProFieldSlider.props = proFieldSliderProps as any;

export * from './props';

export { ProFieldSlider };

export default ProFieldSlider;
