/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-25 14:10:47
 * @FilePath: \element-plus-pro\packages\field\src\components\TreeSelect.tsx
 */
import { ElTreeSelect } from "element-plus";
import "element-plus/theme-chalk/src/tree-select.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import { ProFieldTreeSelectProps } from "./props";

const ProFieldTreeSelect = defineComponent<ProFieldTreeSelectProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElTreeSelect v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldTreeSelect",
	}
) as unknown as FunctionalComponent<ProFieldTreeSelectProps>;

export * from "./props";

export { ProFieldTreeSelect };

export default ProFieldTreeSelect;
