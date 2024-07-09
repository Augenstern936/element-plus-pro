/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-22 19:04:01
 * @LastEditTime: 2024-07-09 17:01:37
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldNumber.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElInputNumber } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldNumberProps, proInputNumberProps } from "./props";

export const ProFieldNumber = defineComponent<ProFieldNumberProps>((props, ctx) => {
	const model = useVModel(props, "modelValue", ctx.emit);
	return () => {
		if (props.mode === "read") {
			return <el-text>{model.value ?? 0}</el-text>;
		}
		if (props.mode === "edit") {
			return <ElInputNumber {...props} v-model={model.value} />;
		}
		return "";
	};
}) as DefineComponent<ProFieldNumberProps>;

ProFieldNumber.props = proInputNumberProps as any;
