/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-09 16:58:37
 * @FilePath: \element-plus-pro\packages\field\src\components\Cascader\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElCascader } from "element-plus";
import "element-plus/theme-chalk/src/cascader.scss";
import { defineComponent, DefineComponent } from "vue-demi";
import { proFieldCascaderProps, ProFieldCascaderProps } from "./props";

const ProFieldCascader = defineComponent<ProFieldCascaderProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);

		return () => <ElCascader {...props} v-model={model.value} />;
	},
	{
		name: "ProFieldCascader",
	}
) as DefineComponent<ProFieldCascaderProps>;

ProFieldCascader.props = proFieldCascaderProps as any;

export * from "./props";

export { ProFieldCascader };

export default ProFieldCascader;
