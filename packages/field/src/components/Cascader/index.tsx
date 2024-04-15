/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 14:58:23
 * @FilePath: \element-plus-pro\packages\field\src\components\Cascader.tsx
 */
import { ElCascader } from "element-plus";
import "element-plus/theme-chalk/src/cascader.scss";
import { computed, defineComponent, FunctionalComponent } from "vue";
import { proFieldCascaderProps, ProFieldCascaderProps } from "./typing";

const ProFieldCascader = defineComponent<ProFieldCascaderProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElCascader v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldCascader",
	}
) as unknown as FunctionalComponent<ProFieldCascaderProps>;

ProFieldCascader.props = proFieldCascaderProps;

export * from "./typing";

export { ProFieldCascader };

export default ProFieldCascader;
