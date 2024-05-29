/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-29 15:25:15
 * @FilePath: \element-plus-pro\packages\field\src\components\Slider.tsx
 */
import { ElSlider } from "element-plus";
import "element-plus/theme-chalk/src/slider.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import { ProFieldSliderProps, proFieldSliderProps } from "./props";

const ProFieldSlider = defineComponent<ProFieldSliderProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElSlider v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldSlider",
	}
) as unknown as FunctionalComponent<ProFieldSliderProps>;

ProFieldSlider.props = proFieldSliderProps as any;

export * from "./props";

export { ProFieldSlider };

export default ProFieldSlider;
