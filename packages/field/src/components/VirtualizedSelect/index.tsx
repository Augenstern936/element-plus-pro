/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-09 17:03:19
 * @FilePath: \element-plus-pro\packages\field\src\components\VirtualizedSelect\index.tsx
 */
import { enumTransformOptions, getValueOptionConfigs } from "@element-plus/pro-utils";
import { useVModel } from "@vueuse/core";
import { ElOption, ElSelect } from "element-plus";
import "element-plus/theme-chalk/src/option.scss";
import "element-plus/theme-chalk/src/select.scss";
import { computed, DefineComponent, defineComponent } from "vue-demi";
import { ReadOptions } from "../widgets";
import { proFieldSelectProps, ProFieldSelectProps } from "./props";

const ProFieldVirtualizedSelect = defineComponent<ProFieldSelectProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);
		const options = computed(() => {
			return props?.valueOptions?.length ? props.valueOptions : enumTransformOptions(props.valueEnum ?? {});
		});
		return () => (
			<>
				{props.mode === "read" ? (
					<ReadOptions
						markShape={props.markShape}
						value={getValueOptionConfigs(model.value ?? [], options.value)}
					/>
				) : (
					<ElSelect v-model={model.value}>
						{options.value?.map((option) => <ElOption key={option.label} {...option} />)}
					</ElSelect>
				)}
			</>
		);
	},
	{
		name: "ProFieldVirtualizedSelect",
	}
) as DefineComponent<ProFieldSelectProps>;

ProFieldVirtualizedSelect.props = proFieldSelectProps as any;

export * from "./props";

export { ProFieldVirtualizedSelect };

export default ProFieldVirtualizedSelect;
