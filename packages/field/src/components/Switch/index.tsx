/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:18:36
 * @FilePath: \element-plus-pro\packages\field\src\components\Switch\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElSwitch, ElText } from "element-plus";
// import "element-plus/theme-chalk/src/switch.scss";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import { ProFieldSwitchProps, proFieldSwitchProps } from "./props";

const ProFieldSwitch = defineComponent<ProFieldSwitchProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);

		const text = computed(() => {
			const activeText = props.activeText || "打开";
			const inactiveText = props.inactiveText || "关闭";

			const { activeValue, inactiveValue } = props;

			if (model.value === activeValue) {
				return activeText;
			}
			if (model.value === inactiveValue) {
				return inactiveText;
			}

			return model.value ? (activeValue ? inactiveText : activeText) : inactiveValue ? activeText : inactiveText;
		});

		const render = () => {
			if (props.mode === "read") {
				return <ElText>{text.value}</ElText>;
			}
			return <ElSwitch {...props} v-model={model.value} />;
		};

		return render;
	},
	{
		name: "ProFieldSwitch",
	}
) as DefineComponent<ProFieldSwitchProps>;

ProFieldSwitch.props = proFieldSwitchProps as any;

export * from "./props";

export { ProFieldSwitch };

export default ProFieldSwitch;
