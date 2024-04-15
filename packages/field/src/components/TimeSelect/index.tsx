/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 14:41:19
 * @FilePath: \element-plus-pro\packages\field\src\components\TimeSelect.tsx
 */
import { ElTimeSelect } from "element-plus";
import "element-plus/theme-chalk/src/time-select.scss";
import type { FunctionalComponent } from "vue";
import { computed, defineComponent } from "vue";
import { ProFieldTimeSelectProps, proFieldTimeSelectProps } from "./typing";

const ProFieldTimeSelect = defineComponent<ProFieldTimeSelectProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("upTime:modelValue", value);
			},
		});

		return () => <ElTimeSelect v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldTimeSelect",
	}
) as unknown as FunctionalComponent<ProFieldTimeSelectProps>;

ProFieldTimeSelect.props = proFieldTimeSelectProps as any;

export * from "./typing";

export { ProFieldTimeSelect };

export default ProFieldTimeSelect;
