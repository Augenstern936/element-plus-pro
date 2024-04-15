/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 16:10:53
 * @FilePath: \element-plus-pro\packages\field\src\components\Switch.tsx
 */
import { ElSwitch } from "element-plus";
import "element-plus/theme-chalk/src/switch.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import { ProFieldSwitchProps, proFieldSwitchProps } from "./typing";

const ProFieldSwitch = defineComponent<ProFieldSwitchProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElSwitch v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldSwitch",
	}
) as unknown as FunctionalComponent<ProFieldSwitchProps>;

ProFieldSwitch.props = proFieldSwitchProps;

export * from "./typing";

export { ProFieldSwitch };

export default ProFieldSwitch;