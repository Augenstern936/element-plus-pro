/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:06:27
 * @FilePath: \element-plus-pro\packages\field\src\components\ColorPicker\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElColorPicker } from "element-plus";
// import "element-plus/theme-chalk/src/color-picker.scss";
import { defineComponent, DefineComponent } from "vue-demi";
import { proFieldColor, ProFieldColorProps } from "./props";

const ProFieldColor = defineComponent<ProFieldColorProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);

		return () => (
			<ElColorPicker {...props} disabled={props.mode === "read" ? true : props.disabled} v-model={model.value} />
		);
	},
	{
		name: "ProFieldColor",
	}
) as DefineComponent<ProFieldColorProps>;

ProFieldColor.props = proFieldColor as any;

export * from "./props";

export { ProFieldColor };

export default ProFieldColor;
