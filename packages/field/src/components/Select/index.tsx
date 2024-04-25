/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-25 14:09:18
 * @FilePath: \element-plus-pro\packages\field\src\components\Select.tsx
 */
import type { ISelectProps } from "element-plus";
import { ElOption, ElSelect } from "element-plus";
import "element-plus/theme-chalk/src/option.scss";
import "element-plus/theme-chalk/src/select.scss";
import { CSSProperties, FunctionalComponent, computed, defineComponent } from "vue";

export interface ProSelectProps extends Omit<ISelectProps, "options"> {
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFieldSelect = defineComponent<ProSelectProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => (
			<ElSelect v-model={state.value}>
				{props.options?.map((option, index) => (
					<ElOption {...option} key={index}>
						{option.label}
					</ElOption>
				))}
			</ElSelect>
		);
	},
	{
		name: "ProFieldSelect",
	}
) as unknown as FunctionalComponent<ProSelectProps>;

export * from "./props";

export { ProFieldSelect };

export default ProFieldSelect;
