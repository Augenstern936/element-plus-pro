/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 15:46:48
 * @FilePath: \element-plus-pro\packages\field\src\components\Color.tsx
 */
import { ElColorPicker } from "element-plus";
import "element-plus/theme-chalk/src/color-picker.scss";
import { computed, defineComponent, FunctionalComponent } from "vue";
import { proFieldColor, ProFieldColorProps } from "./typing";

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

ProFieldColor.props = proFieldColor;

export * from "./typing";

export { ProFieldColor };

export default ProFieldColor;
